/**
 * Socket.io configuration
 */

'use strict';

var users = {};

var usersToSockets = {};

var config = require('./environment');

// When the user disconnects.. perform this
function onDisconnect(socket) {
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', function (data) {
    console.info('[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  require('../api/activeUser/activeUser.socket').register(socket);
  require('../api/cookathome/cookathome.socket').register(socket);
  require('../api/orderin/orderin.socket').register(socket);
  require('../api/eatout/eatout.socket').register(socket);
  require('../api/dinner/dinner.socket').register(socket);
  require('../api/group/group.socket').register(socket);
  require('../api/thing/thing.socket').register(socket);
}

module.exports = function (socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.handshake.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function (socket) {
    socket.address = socket.handshake.address !== null ?
            socket.handshake.address.address + ':' + socket.handshake.address.port :
            process.env.DOMAIN;

    socket.connectedAt = new Date();

    socket.on('logOutUser', function(data){
        var goneUser = data;
        delete users[goneUser];
        console.log(users);
        socket.emit('activeUsers', users);
        socket.broadcast.emit('activeUsers', users);
      });



    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('[%s] DISCONNECTED', socket.client.id);
      for (var key in users){
        if(users[key] === socket.client.id){
          delete users[key];
          console.log(users);
          socket.emit('activeUsers', users);
          socket.broadcast.emit('activeUsers', users);
        }
      }

    });

    socket.on("getUsers", function() {
      socket.emit('activeUsers', users);
      socket.broadcast.emit('activeUsers', users);
    });

    // Call onConnect.
    onConnect(socket);
    console.info('[%s] CONNECTED', socket.address);
    socket.on('currentUser', function(data){
      // socket.client.id.push(user);
      var newUser = data;
      users[newUser] = socket.client.id;
      console.log(users);
      socket.emit('activeUsers', users);
      socket.broadcast.emit('activeUsers', users);
    });
    // console.log(socket.client.id);
    // console.log(socket.conn.server.clients);
  });
};