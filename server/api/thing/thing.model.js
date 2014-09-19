'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  message: String,
  info: String,
  active: Boolean,
  currentUser: String,
  timeSent: String,
  dinnerType: String,
  eatOutDetails: {restName: String, restAddress: String, restPhone: String, restWeb: String, likes: Number},
  cookAtHomeDetails : {nameOfDish: String, likes: Number},
  orderInDetails: {restName: String, restAddress: String, restPhone: String, restWeb: String, likes: Number}
});

module.exports = mongoose.model('Thing', ThingSchema);