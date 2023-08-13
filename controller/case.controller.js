const caseModel = require('../model/cases.model');

exports.testing =(req, res, next) => {
    res.send('Admin Router Works well');
}

exports.list = (req, res, next) => {
    caseModel.find()
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


exports.findByStatus = (req, res, next) => {
    caseModel.find({status: req.query.status})
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

exports.findByID = (req, res, next) => {
    caseModel.findById( req.query.id)
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



exports.save = (req, res, next) => {
    caseModel.create(req.body)
        .then((response) => { 
            res.status(200).send({message: 'Case Saved', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.update = (req, res, next) => {
    caseModel.findByIdAndUpdate(req.query.id,req.body)
        .then((response) => {
            res.status(201).send({message: 'Case Updated', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.removeCase = (req, res, next) => {
    caseModel.findByIdAndDelete(rep.query.id)
        .then((response) => {
            res.status(200).send({message: 'Case Delete', case: response});
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}