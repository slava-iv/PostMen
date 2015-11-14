var bus = require('./EventsBus.js');

var clients = [];

module.exports = function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 

  clients.push(socket);

  bus.on('throw', function(data) {
    socket.write(data);
  });

  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
  });
};
