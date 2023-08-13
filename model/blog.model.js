const  mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
 	blogTitle: {type: String, require: true},
    blogBody: {type: String, require: false},
	blogDate: {type: String, require: true},
    blogPicture: {type: String, require: false},
});

module.exports = mongoose.model('Blog',blogSchema);



