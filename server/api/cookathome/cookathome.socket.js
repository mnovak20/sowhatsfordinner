/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cookathome = require('./cookathome.model');

exports.register = function(socket) {
  Cookathome.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cookathome.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cookathome:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cookathome:remove', doc);
}