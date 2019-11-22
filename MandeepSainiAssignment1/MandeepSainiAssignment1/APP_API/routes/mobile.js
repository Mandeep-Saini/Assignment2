const express = require('express');
const router = express.Router();
const ctrlMobile = require('../controllers/mobile');
router
.route('/mobile')
.get(ctrlFood.getFoods)
.post(ctrlFood.createFood);
router
.route('/mobile/:mobileid')
.get(ctrlFood.getSingleFood)
.put(ctrlFood.updateFood)
.delete(ctrlFood.deleteFood);
module.exports = router;
