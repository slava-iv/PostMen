var bus = require('./EventsBus.js');

var clients = [];

module.exports = function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  console.log(socket.name);

  clients.push(socket);

  bus.on('throw', function(data) {
    socket.write(data);
  });

  var timer = setInterval(function() {
  	socket.write('positionUpdated ' + Math.floor(Math.random() * 100) + '\n');
  }, 1000 / 30);

  socket.on('data', function(data) {
    console.log(data.toString());
  });

  socket.on('end', function () {
    clients.splice(clients.indexOf(socket), 1);
    clearInterval(timer);
  });
};
