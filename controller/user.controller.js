const userModel = require('../model/users.model');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userToken = require('../model/userToken');
const sendEmail = require('../services/sendEmail');

var bcryptSalt = 10;

exports.testing =(req, res, next) => {
    res.send('User Router Works well');
}

exports.list = (req, res, next) => {
    userModel.find()
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Case avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.signin =  async (req, res, next) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        if (!user) {
            return res.status(401).send('1. Invalid email or password.');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {return res.status(401).send('2. Invalid email or password.')}

        if (user.status === 'active') {
            const token = user.generateAuthToken();
            res.status(200).send({
                token:token,
                user: user
            })
        } else if (user.status === 'banned') {
            res.status(401).send('Ntiwemere kwinjira muri conti yawe. Hamagara ugukuriye.')
        }
    } catch (error) {
        return res.status(500).send('Internal Server Error :'+error)
    }
}

exports.signup =  async (req, res, next) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        if (user) {return res.status(401).send('Account with this email already exits.')}

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const encPassword = await bcrypt.hash(req.body.password, salt)

        await new userModel({...req.body, password: encPassword}).save();
        res.status(201).send({message: 'Account created'});
    } catch (error) {
        return res.status(500).send('Internal Server Error :'+error)
    }
}

exports.requestPasswordReset = async (req, res, next) => {
    try {
        
        const { email, role } = req.body;

        const emailAlreadyRegistered = await userModel.findOne({ email: email});
        if (!emailAlreadyRegistered) { return res.status(409).send({  message: "Email address unrecognized!" }) }
    
        let token = await userToken.findOne({ userId: emailAlreadyRegistered._id });
        if ( token ) await token.deleteOne();
    
        let resetToken = crypto.randomBytes(32).toString("hex");
        const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
    
        await new userToken({
            userId: emailAlreadyRegistered._id,
            token: resetToken,
            createdAt: Date.now(),
        }).save();
        
        let link='';
        if (role === 'Agent') {
            link = `http://localhost:3001/auth/resetPassword/${resetToken}/${emailAlreadyRegistered._id}`;
        } else if (role === 'Supervisor') {
            link = `http://localhost:3002/auth/resetPassword/${resetToken}/${emailAlreadyRegistered._id}`;
        } else {
            link = `http://localhost:3003/auth/resetPassword/${resetToken}/${emailAlreadyRegistered._id}`;
        }
    
        await sendEmail(emailAlreadyRegistered.email, "Password reset form CRM", link);
    
        res.status(201).send({message: `Password reset link sent to your email account ${emailAlreadyRegistered.email}.`});   
    } catch (error) {
        return res.status(500).send('Internal Server Error :'+error)
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.query.id);
        if (!user) return res.status(400).send("Invalid or expired link");
        console.log(user.id);

        const token = await userToken.findOne({
            userId: user.id,
            token: req.query.token,
        });

        if (!token) return res.status(400).send("Invalid or expired link");

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        user.password = hashedPassword;
        await user.save();
        await token.delete();

        res.status(201).send({message: "Password reset sucessfully."});
    } catch (error) {
        return res.status(500).send('Internal Server Error :'+error)
    }
}

exports.findByProvince = (req, res, next) => {
    userModel.find({province: req.query.province})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No user avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findByDistrict = (req, res, next) => {
    userModel.find({district: req.query.district})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No user avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findBySector = (req, res, next) => {
    userModel.find({sector: req.query.sector})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No user avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findByID = (req, res, next) => {
   	userModel.findById(req.query.id)
    .then((response) => {
        if(response){
            res.status(200).send(response);
        } else {
            res.status(404).send("No Case avaible")
        }
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.findByEmail = (req, res, next) => {
    userModel.findOne({ email: req.query.email })
    .then((response) => {
        if(response){
            res.status(201).send(response);
        } else {
            res.status(404).send("No Case avaible")
        }
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.update = (req, res, next) => {
    userModel.findByIdAndUpdate(req.query.id,req.body)
        .then((response) => {            
            res.status(201).send({message: 'Conti yahinduwe ...', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.removeUser = (req, res, next) => {
    userModel.findByIdAndDelete(req.query.id)
    .then((response) => { res.status(201).send({message: 'Konti yasibwe', case: response}) })
    .catch(err =>{ res.status(500).send("Server error:"+ err) })
}
