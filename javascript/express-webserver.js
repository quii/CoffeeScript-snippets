(function() {
  var app;

  app = require('express').createServer();

  app.get('/', function(req, res) {
    return res.send('hello world');
  });

  app.listen(3000);

}).call(this);
