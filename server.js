'use strict'
// MODULES & CONFIG //
var app      = require('./server/config/express.js')();
var passport = require('passport');
require('./server/config/db.js')();
require('./server/config/passport')(passport);

var port = 3700;

//ROUTES//
require('./server/features/auth/auth.server.routes')(app, passport);

app.get('/api/test', function(req, res){
  res.status(200).json("I'm Alive");
});

//LISTEN//
app.listen(port, function(){
  console.log('Listening on port', + port);
});
