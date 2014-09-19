'use strict';

var _ = require('lodash');
var Dinner = require('./dinner.model');

// Get list of dinners
exports.index = function(req, res) {
  Dinner.find(function (err, dinners) {
    if(err) { return handleError(res, err); }
    return res.json(200, dinners);
  });
};

// Get a single dinner
exports.show = function(req, res) {
  Dinner.findById(req.params.id, function (err, dinner) {
    if(err) { return handleError(res, err); }
    if(!dinner) { return res.send(404); }
    return res.json(dinner);
  });
};

// Creates a new dinner in the DB.
exports.create = function(req, res) {
  Dinner.create(req.body, function(err, dinner) {
    if(err) { return handleError(res, err); }
    return res.json(201, dinner);
  });
};

// Updates an existing dinner in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Dinner.findById(req.params.id, function (err, dinner) {
    if (err) { return handleError(res, err); }
    if(!dinner) { return res.send(404); }
    var updated = _.merge(dinner, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, dinner);
    });
  });
};

// Deletes a dinner from the DB.
exports.destroy = function(req, res) {
  Dinner.findById(req.params.id, function (err, dinner) {
    if(err) { return handleError(res, err); }
    if(!dinner) { return res.send(404); }
    dinner.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}