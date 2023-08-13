const mongoose = require('mongoose');


const reportSchema = new mongoose.Schema({

    //family members Information

    firstHeadOfFamilyName: {type: String, require: false},
    headOfFamilyPhone: {type: String, require: false},

    secondHeadOfFamilyName: {type: String, require: true},
    SecondOfFamilyPhone: {type: String, require: true},

    numberOfFamilyMember: {type: Number, require: true},
    familyResidence:{type: String, require: true },

    //Family prombles 

    familyProblem:{type: String, require: false},
    DescriptionOfProblem:{type: String, require: false},
    ProblemSolved:{type: String , require: false},
   
    //Child prombles 
    
    effectOnChild:{type: String, require: false},
    effectDescription:{type: String, require: false },

   //ather Case information
    NameOfAgent:{type: String, require: false},
    agentPhoneNumber:{type: String, require: false},
    agentLocation:{type: String, require: false},
    dateOfReport:{type: Date, require: false},


});

const Report = mongoose.model('Report',reportSchema);
module.exports= Report;
