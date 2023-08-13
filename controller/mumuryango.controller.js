const mumuryangoModel = require('../model/mumuryango.model');

exports.testing =(req, res, next) => {
    res.send('Admin Router Works well');
}

exports.familyList = (req, res, next) => {
    mumuryangoModel.find()
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Family avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}


exports.findByFamilyProblem = (req, res, next) => {
    mumuryangoModel.find({status: req.query.status})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Family avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findByFamilyID = (req, res, next) => {
    mumuryangoModel.findById( req.query.id)
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No Family avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}




exports.save = (req, res, next) => {
    console.log(req.body + "mike");
    mumuryangoModel.create(req.body)
        .then((response) => { 
            res.status(201).send({message: 'Family Saved', family: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.updateFamily = (req, res, next) => {
    mumuryangoModel.findByIdAndUpdate(req.query.id,req.body)
        .then((response) => {
            
            res.status(201).send({message: 'Family Update', family: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.removeFamily = (req, res, next) => {
    mumuryangoModel.findByIdAndDelete(rep.query.id)
        .then((response) => {
            res.status(200).send({message: 'Family Delete', family: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}
