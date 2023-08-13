const jwt = require('jsonwebtoken');
const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 	name: {type: String, require: true},
	nid: {type: String, require: true},
	phone: {type: String, require: true},
	email: {type: String, require: true},
	province: {type: String, require: false},
	district: {type: String, require: false},
	sector: {type: String, require: false},
	cell: {type: String, require: false},
	role: {type: String, require: true},
	password: {type: String, require: true},
	status: {
		type: String,
		default: 'active',
		enum: {
			values: ['active', 'banned'],
			message: '{VALUE} is 	not supported'
		}
	},
});

userSchema.methods.generateAuthToken = function() {
	const token = jwt.sign({_id: this.id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'})
	return token;
}

const User = mongoose.model('User',userSchema);
module.exports = User;

    
    




