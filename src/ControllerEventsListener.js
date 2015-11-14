var bus = require('./EventsBus.js');

var clients = [];

module.exports = function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 

  clients.push(socket);

  socket.on('data', function (data) {
    console.log('>', data.toJSON());
    bus.emit('throw', data);
  });

  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
  });
};
