const express = require('express');
const { testing, list, findByStatus, findByID, update, save, removeBlog, uploads, attachFile } = require('../controller/blog.controller');
const router = express.Router();

router.get('/test', testing);
router.get('/list', list);
router.get('/findByStatus', findByStatus);
router.get('/findByID', findByID);
router.post('/save', uploads.single('blogPicture'), attachFile, save);
router.put('/update', update);
router.delete('/delete', removeBlog);

module.exports = router;