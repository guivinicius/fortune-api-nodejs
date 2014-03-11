
/*
 * GET fortune.
 */

exports.show = function(req, res){
  var fortune = 'this is a fortune!';

  if (req.params.format === 'json') {
    res.set('Content-Type', 'application/json');
    res.json({ text: fortune });
  } else {
    res.set('Content-Type', 'text/plain');
    res.send(fortune);
  };

};
