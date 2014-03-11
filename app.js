
/**
 * Module dependencies.
 */

var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    fortune = require('./lib/fortune'),
    app     = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Index
app.get('/', function(req, res){
  res.render('index', { title: 'Fortune API using Node.js and Express.js' });
});

// Fortunes
app.get('/fortune?.:format?', function(req, res){

  var long  = req.query.long,
      dirty = req.query.dirty,
      text  = fortune(long, dirty).text();

  if (req.params.format === 'json') {
    res.set('Content-Type', 'application/json');
    res.json({ text: text });
  } else {
    res.set('Content-Type', 'text/plain');
    res.send(text);
  };

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
