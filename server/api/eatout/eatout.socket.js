/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Eatout = require('./eatout.model');

exports.register = function(socket) {
  Eatout.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Eatout.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('eatout:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('eatout:remove', doc);
}