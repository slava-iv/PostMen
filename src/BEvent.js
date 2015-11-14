var mongoose = require('mongoose');

var BEvent = module.exports = mongoose.model('Event', {
  name: String
});
