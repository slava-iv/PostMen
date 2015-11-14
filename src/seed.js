require('./setupDatabase');

var BEvent = require('./BEvent');

for (var i = 0; i < 10; i++) {
  var event = new BEvent({ name: 'event' + i });
  event.save(function(err) {
    console.log(err ? 'E' : 'O');
  });
}
