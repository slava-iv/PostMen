var mongoose = require('mongoose');

var databaseHostname = process.env.NODE_ENV === 'production'
  ? 'database'
  : 'localhost';

module.exports = mongoose.connect('mongodb://' + databaseHostname + '/bowling');
