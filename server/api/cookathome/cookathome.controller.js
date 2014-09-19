'use strict';

var _ = require('lodash');
var Cookathome = require('./cookathome.model');

// Get list of cookathomes
exports.index = function(req, res) {
  Cookathome.find(function (err, cookathomes) {
    if(err) { return handleError(res, err); }
    return res.json(200, cookathomes);
  });
};

// Get a single cookathome
exports.show = function(req, res) {
  Cookathome.findById(req.params.id, function (err, cookathome) {
    if(err) { return handleError(res, err); }
    if(!cookathome) { return res.send(404); }
    return res.json(cookathome);
  });
};

// Creates a new cookathome in the DB.
exports.create = function(req, res) {
  Cookathome.create(req.body, function(err, cookathome) {
    if(err) { return handleError(res, err); }
    return res.json(201, cookathome);
  });
};

// Updates an existing cookathome in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cookathome.findById(req.params.id, function (err, cookathome) {
    if (err) { return handleError(res, err); }
    if(!cookathome) { return res.send(404); }
    var updated = _.merge(cookathome, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cookathome);
    });
  });
};

// Deletes a cookathome from the DB.
exports.destroy = function(req, res) {
  Cookathome.findById(req.params.id, function (err, cookathome) {
    if(err) { return handleError(res, err); }
    if(!cookathome) { return res.send(404); }
    cookathome.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}