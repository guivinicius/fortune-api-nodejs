var fortune = require('../lib/fortune')

exports.show = function(req, res){

  var long  = req.query.long,
      dirty = req.query.dirty;

  var text = fortune(long, dirty).text();

  if (req.params.format === 'json') {
    res.set('Content-Type', 'application/json');
    res.json({ text: text });
  } else {
    res.set('Content-Type', 'text/plain');
    res.send(text);
  };

};
