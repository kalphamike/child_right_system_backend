


const  mongoose = require('mongoose');


const MumuryangoSchema = new mongoose.Schema({
 

    //family members Information

    firstHeadOfFamilyName: {type: String, require: false},
    headOfFamilyPhone: {type: String, require: false},

//     secondHeadOfFamilyName: {type: String, require: true},
//     SecondOfFamilyPhone: {type: Number, require: true},

//     numberOfFamilyMember: {type: Number, require: true},
//     familyResidence:{type: String, require: true },



//     //Family prombles 

//     familyPrombre:{type: String, require: false},
//     DescriptionOfProblem:{type: String, require: false},
//     ProblemSolved:{type: String , require: false},
   
//     //Child prombles 
    
//     childSchooling:{type: String, require: false},
//     childHeathlCare:{type: String, require: false },
//     childDescription:{type: String, require: false },


//    //ather Case information
//     NameOfAgent:{type: String, require: false},
//     agentPhoneNumber:{type: String, require: false},
//     agentLocation:{type: String, require: false},
//     //caseStatus:{type: String, require: false},


});

const mumuryango = mongoose.model('Mumuryango',MumuryangoSchema);
module.exports = mumuryango;

    
    




