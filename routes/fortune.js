
/*
 * GET fortune.
 */

exports.show = function(req, res){
  res.json({ text: 'this is a fortune!' });
};
