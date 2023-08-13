const express = require('express');
const { testing, list, findByStatus, findByID, update, removeCase, save } = require('../controller/case.controller');
const router = express.Router();


router.get('/test', testing);
router.get('/list', list);
router.get('/findByStatus', findByStatus);
router.get('/findByID', findByID);
router.post('/save', save);
router.put('/update', update);
router.delete('/delete', removeCase);

module.exports = router;