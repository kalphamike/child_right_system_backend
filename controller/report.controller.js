const reportModel = require('../model/report.model');

exports.testing =(req, res, next) => {
    res.send('Admin Router Works well');
}

exports.list = (req, res, next) => {
    reportModel.find()
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No report avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}


exports.findByStatus = (req, res, next) => {
    reportModel.find({status: req.query.status})
        .then((response) => {
            if(response){
                res.status(200).send(response);
            } else {
                res.status(404).send("No report avaible")
            }
        })
        .catch(err =>{
            res.status(500).send("Server error:"+ err);
        })
}

exports.findByID = (req, res, next) => {
    reportModel.findById( req.query.id)
    .then((response) => {
        if (response) { res.status(200).send(response);
        } else { res.status(404).send("No report avaible") }
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}



exports.save = (req, res, next) => {
    console.log("Data to be saved!  ");
    console.log(req.body);
    reportModel.create(req.body)
    .then((response) => { 
        res.status(201).send({message: 'report Saved', report: response});
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.update = (req, res, next) => {
    reportModel.findByIdAndUpdate(req.query.id,req.body)
    .then((response) => {
        res.status(200).send({message: 'report Update', report: response});
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.removeReport = (req, res, next) => {
    reportModel.findByIdAndDelete(rep.query.id)
    .then((response) => {
        res.status(200).send({message: 'report Delete', report: response});
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}