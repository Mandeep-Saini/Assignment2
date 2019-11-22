var express = require('express');
var router = express.Router();
const ctrlMain=require('../controllers/about');
const ctrlPhone=require('../controllers/phone');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', ctrlPhone.about);
router.get('/list', ctrlPhone.phoneList);
router.get('/display', ctrlPhone.display);

module.exports = router;
