require('./setupDatabase');

var ThrowResult = require('./ThrowResult');

for (var i = 0; i < 10; i++) {
  var event = new ThrowResult({
  	value: Math.round(Math.random() * 10)
  });

  event.save(function(err) {
    console.log(err ? 'E' : 'O');
  });
}
