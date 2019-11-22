const mongoose = require( 'mongoose' );
const featuresSchema = new mongoose.Schema({
camera: {
type: String
},
capacity: String,
});

const mobileSchema = new mongoose.Schema({
   name: {  type: String,   required: true},
   type: String,
   rating: {  type: Number,  'default': 0,min: 0,max: 5},
   description: [String],
   price:{ type: Number},
features: [featuresSchema]
});

mongoose.model('Mobile', mobileSchema);