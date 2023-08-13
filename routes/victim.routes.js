
const express = require('express');
const { testing, list, findByName, findByID, update, remove, save } = require('../controller/victim.controller');
const router = express.Router();


router.get('/test', testing);
router.get('/list', list);
router.get('/findByName', findByName);
router.get('/findByID', findByID);
router.post('/save', save);
router.put('/update', update);
router.delete('/delete', remove);

module.exports = router;