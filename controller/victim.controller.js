const VictimModel = require('../model/victims.model');

exports.testing =(req, res, next) => {
    res.send('Admin Router Works well');
}

exports.list = (req, res, next) => {
    VictimModel.find()
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Victim avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}


exports.findByName  = (req, res, next) => {
    VictimModel.find({status: req.query.status})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Victim avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findByID = (req, res, next) => {
    VictimModel.findById( req.query.id)
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Victim avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}



exports.save = (req, res, next) => {
    VictimModel.create(req.body)
        .then((response) => { 
            res.status(200).send({message: 'Victim Saved', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.update = (req, res, next) => {
    VictimModel.findByIdAndUpdate(req.query.id,req.body)
        .then((response) => {
            
            res.status(200).send({message: 'Victim Update', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.remove = (req, res, next) => {
    VictimModel.findByIdAndDelete(rep.query.id)
        .then((response) => {
            res.status(200).send({message: 'Victim Delete', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}