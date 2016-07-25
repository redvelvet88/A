'use strict'

// DB CONFIG //
var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds027175.mlab.com:27175/clinicapp';

module.exports = function () {
  mongoose.connect(mongoURI);
  mongoose.connection.once('open', function () {
    console.log('Connect to mongoDB at', mongoURI);
  })
};
