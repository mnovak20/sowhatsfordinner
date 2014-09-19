'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CookathomeSchema = new Schema({
  nameOfDish: String
  
});

module.exports = mongoose.model('Cookathome', CookathomeSchema);