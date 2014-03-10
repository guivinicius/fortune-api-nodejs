
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Fortune API using Node.js and Express.js' });
};
