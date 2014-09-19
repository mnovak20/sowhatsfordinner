/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Dinner = require('./dinner.model');

exports.register = function(socket) {
  Dinner.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Dinner.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dinner:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dinner:remove', doc);
}