var express      = require('express');
var cors         = require('cors');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser   = require('body-parser');
var session      = require('express-session');

module.exports = function() {
  var app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  
  app.use(express.static('./public'));
  return app;

}
