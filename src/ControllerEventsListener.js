var bus = require('./EventsBus.js');

// Keep track of the chat clients
var clients = [];

module.exports = function (socket) {

  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort 

  // Put this new client in the list
  clients.push(socket);

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    console.log(data.toJSON());
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
  });

};
