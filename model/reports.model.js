const  mongoose = require('mongoose');


const ReportSchema = new mongoose.Schema({
 

    

    // Information Of Victime
    nameOfVictime: {type: String, require: true},
    ageOfVictime: {type: String, require: true},
    victimeResidence: {type: String, require: true},

    //Guiders Information
    firstguiderOfVictime: {type: String, require: true},
    firstguiderResidence: {type: String, require: true},
    firstguiderPhoneNumber: {type: String, require: true},

    secondGuiderOfVictime: {type: String, require: true},
    secondGuiderResidence: {type: String, require: true},
    secondGuiderPhoneNumber: {type: String, require: true},

    //Crime Detail

    DateOfCrime:{type: String, require: false},
    suspectName:{type: String, require: false},
    suspectPhoneNumber:{type: String, require: false},
    supectResidence:{type: String, require: false},
    firstWitness:{type: String, require: false},
    FWPhoneNumber:{type: String, require: false},
    secondWitness:{type: String, require: false},
    SWPhoneNumber: {type: String, require: true},
    locationOfCrime:{type: String, require: false},
    discription:{type: String, require: false},


   //ather Case information
    NameOfAgent:{type: String, require: false},
    agentPhoneNumber:{type: String, require: false},
    agentLocation:{type: String, require: false},
    caseStatus:{type: String, require: false},


});

const Report = mongoose.model('Case',caseSchema);
module.exports = Report;

    
    




