const express = require('express');
const { testing, list, findByStatus, findByID, findByEmail, update, removeReport, save } = require('../controller/report.controller');
const router = express.Router();


router.get('/test', testing);
router.get('/list', list);
router.get('/findByStatus', findByStatus);
router.get('/findByID', findByID);
router.post('/save', save);
router.put('/update', update);
router.delete('/delete', removeReport);

module.exports = router;