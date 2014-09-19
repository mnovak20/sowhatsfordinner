'use strict';

var _ = require('lodash');
var Eatout = require('./eatout.model');

// Get list of eatouts
exports.index = function(req, res) {
  Eatout.find(function (err, eatouts) {
    if(err) { return handleError(res, err); }
    return res.json(200, eatouts);
  });
};

// Get a single eatout
exports.show = function(req, res) {
  Eatout.findById(req.params.id, function (err, eatout) {
    if(err) { return handleError(res, err); }
    if(!eatout) { return res.send(404); }
    return res.json(eatout);
  });
};

// Creates a new eatout in the DB.
exports.create = function(req, res) {
  Eatout.create(req.body, function(err, eatout) {
    if(err) { return handleError(res, err); }
    return res.json(201, eatout);
  });
};

// Updates an existing eatout in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Eatout.findById(req.params.id, function (err, eatout) {
    if (err) { return handleError(res, err); }
    if(!eatout) { return res.send(404); }
    var updated = _.merge(eatout, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, eatout);
    });
  });
};

// Deletes a eatout from the DB.
exports.destroy = function(req, res) {
  Eatout.findById(req.params.id, function (err, eatout) {
    if(err) { return handleError(res, err); }
    if(!eatout) { return res.send(404); }
    eatout.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}