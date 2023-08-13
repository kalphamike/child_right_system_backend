
const express = require('express');
const { testing, list, findByProvince, update, removeUser, findBySector, findByDistrict, findByID, signin, signup, findByEmail, resetPassword, requestPasswordReset } = require('../controller/user.controller');
const router = express.Router();


router.get('/test', testing);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/resetPassword', resetPassword)
router.get('/list', list);
router.get('/findByProvince', findByProvince);
router.get('/findByDistrict', findByDistrict);
router.get('/findBySector', findBySector);
router.get('/findByEmail', findByEmail);
router.get('/findByID', findByID);
router.put('/update', update);
router.delete('/delete', removeUser);

module.exports = router;