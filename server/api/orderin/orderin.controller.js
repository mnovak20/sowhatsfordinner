'use strict';

var _ = require('lodash');
var Orderin = require('./orderin.model');

// Get list of orderins
exports.index = function(req, res) {
  Orderin.find(function (err, orderins) {
    if(err) { return handleError(res, err); }
    return res.json(200, orderins);
  });
};

// Get a single orderin
exports.show = function(req, res) {
  Orderin.findById(req.params.id, function (err, orderin) {
    if(err) { return handleError(res, err); }
    if(!orderin) { return res.send(404); }
    return res.json(orderin);
  });
};

// Creates a new orderin in the DB.
exports.create = function(req, res) {
  Orderin.create(req.body, function(err, orderin) {
    if(err) { return handleError(res, err); }
    return res.json(201, orderin);
  });
};

// Updates an existing orderin in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Orderin.findById(req.params.id, function (err, orderin) {
    if (err) { return handleError(res, err); }
    if(!orderin) { return res.send(404); }
    var updated = _.merge(orderin, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, orderin);
    });
  });
};

// Deletes a orderin from the DB.
exports.destroy = function(req, res) {
  Orderin.findById(req.params.id, function (err, orderin) {
    if(err) { return handleError(res, err); }
    if(!orderin) { return res.send(404); }
    orderin.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}