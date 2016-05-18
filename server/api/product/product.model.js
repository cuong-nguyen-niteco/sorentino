'use strict';
import mongoose from 'mongoose';

mongoose.models = {};
mongoose.modelSchemas = {};

var ColorSchema = mongoose.Schema({
  name : String,
  code: String,
  images: [String]
});

var ProductSchema = mongoose.Schema({
  name : String,
  price: Number,
  description: String,
  collections: [Number],
  colors: [ColorSchema],
  spec: {
    description: String,
    details: String,
    material: String
  },
  priority: {type: Number, default: 0}
});

export default mongoose.model('Product', ProductSchema);
