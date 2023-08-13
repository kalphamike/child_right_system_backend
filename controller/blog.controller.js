
const multer = require('multer');
const blogModel = require('../model/blog.model');

exports.testing =(req, res, next) => {
    res.send('Blog Router Works well');
}

exports.list = (req, res, next) => {
    blogModel.find()
    .then((response) => {
        if(response){
            res.status(201).send(response);
        } else {
            res.status(404).send("No blog avaible")
        }
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.findByStatus = (req, res, next) => {
    blogModel.find({status: req.query.status})
    .then((response) => {
        if(response){
            res.status(201).send(response);
        } else {
            res.status(404).send("No blog avaible")
        }
    })
    .catch(err =>{
        res.status(500).send("Server error:"+ err);
    })
}

exports.findByID = (req, res, next) => {
    blogModel.findById( req.query.id)
    .then((response) => {
        if (response) { res.status(201).send(response);
        } else { res.status(404).send("No blog avaible") }
    })
    .catch(err =>{ res.status(500).send("Server error:"+ err) })
}

/** MULTER CONFIGURATION */
// Image storage
const multerStorage = multer.diskStorage({
   destination: (req, file, callback) => { callback(null, './uploads') },
   filename: (req, file, callback) => { callback(null, `img-${file.originalname}`)}
})

exports.uploads = multer({ storage: multerStorage });

exports.attachFile = (req, res, next) => {
    req.body.blogPicture = req.file.filename;
    req.body.blogDate = new Date();
    next();
}

exports.save = (req, res, next) => {
    blogModel.create(req.body)
    .then((response) => { 
        res.status(201).send({ message: 'Infashanyigisho yabitwe', blog: response });
    })
    .catch(err =>{ res.status(500).send("Server error:"+ err) })
}

exports.update = (req, res, next) => {
    blogModel.findByIdAndUpdate(req.query.id,req.body)
    .then((response) => {
        res.status(201).send({message: 'Infashanyigisha yahinduwe', blog: response});
    })
    .catch(err =>{ res.status(500).send("Server error:"+ err) });
}

exports.removeBlog = (req, res, next) => {
    blogModel.findByIdAndDelete(rep.query.id)
    .then((response) => {
        res.status(201).send({message: 'Infashanyigisho yasibwe', blog: response});
    })
    .catch(err =>{ res.status(500).send("Server error:"+ err) })
}