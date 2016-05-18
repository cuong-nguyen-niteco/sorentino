'use strict';
import mongoose from 'mongoose';

var SettingSchema = mongoose.Schema({
  key : String,
  value: String
});

export default mongoose.model('Setting', SettingSchema);
