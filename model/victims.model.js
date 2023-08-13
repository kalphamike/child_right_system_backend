const  mongoose = require('mongoose');


const VictimSchema = new mongoose.Schema({
   
    name: {type: String, require: true},
    //DOB:  {type: Date, require: true},
    gender:  {type: String, require: true},
    education:  {type: String, require: true},
    disability: {type: String, require: true},
    typeOfDisability: {type: String, require: true},
    guiderNames:  {type: String, require: true},
    guiderSnid: {type: String, require: true},
    guidersphone: {type: String, require: true},
    guiderSNames: {type: String, require: true},
	guidernid: {type: String, require: true},
    guiderphone: {type: String, require: true},
	province: {type: String, require: true},
	district: {type: String, require: true},
	sector: {type: String, require: true},
	cell: {type: String, require: true},
    case:{type: String, require: true},
	

})

const Victime = mongoose.model('Victim',VictimSchema);
module.exports = Victime;