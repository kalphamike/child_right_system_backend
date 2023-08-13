const express = require('express');
const {
    testing, 
    familyList,
    findByFamilyProblem,
    save, 
    updateFamily, 
    removeFamily,
    findByFamilyID,
   
}= require('../controller/mumuryango.controller');
const router = express.Router();


router.get('/test', testing);
router.get('/list', familyList);
router.post('/save', save);
router.get('/findByFamilyProblem', findByFamilyProblem);
router.get('/findByID', findByFamilyID);
router.put('/update', updateFamily);
router.delete('/delete', removeFamily);

module.exports = router;