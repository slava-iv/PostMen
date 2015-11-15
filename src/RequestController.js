var ThrowResult = require('./ThrowResult');

var controllerSocket, gameSocket;

var handlers = {
  GET: function(socket, args) {
    if (args[1] === '/csv') {
      socket.write('HELLO');
    }
    socket.end();
  },
  BOWLING_initGame: function(socket, args) {
    gameSocket = socket;
  },
  BOWLING_initController: function(socket, args) {
    controllerSocket = socket;
  },
  BOWLING_requestPlayerPosition: function(socket, args) {
    socket.bowling.timer = setInterval(function() {
      var px = Math.round(Math.random() * 10);
      gameSocket.write('BOWLING_playerPosition ' + px + '\n')
    }, 1000 / 10);
  },
  BOWLING_storeResult: function(source, args) {
    var value = parseInt(args[1], 10);
    console.log('RESULT: ' + value + '\n');

    var result = new ThrowResult({
      value: value,
    });

    result.save(function(err) {
      if (err) {
        console.error(err);
      }
    });
  },
  BOWLING_throw: function(source, args) {
    gameSocket.write('BOWLING_throw ' + args[1] + '\n');
  }
};

module.exports = function(socket) {
  socket.write(
    'HTTP/1.1 200 OK\n' +
    'Last-Modified: Wed, 11 Feb 2009 11:20:59 GMT\n' +
    'Content-Language: en\n' +
    'Content-Type: text/html; charset=utf-8\n' +
    'Connection: keep-alive\n\n'
  );

  socket.bowling = {};

  socket.on('data', function(data) {
    var request = data.toString().match(/^(.*)/)[0];
    var args = request.split(' ');
    return handlers[args[0]](socket, args);
  });
};
