/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Orderin = require('./orderin.model');

exports.register = function(socket) {
  Orderin.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Orderin.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('orderin:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('orderin:remove', doc);
}