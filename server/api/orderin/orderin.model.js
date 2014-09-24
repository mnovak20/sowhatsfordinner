'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderinSchema = new Schema({
  nameOfPlace: String,
  addressOfPlace: String,
  phoneOfPlace: String,
  website: String
});

module.exports = mongoose.model('Orderin', OrderinSchema);