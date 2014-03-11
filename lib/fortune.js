var execSync = require('exec-sync');

function setLength (long){

  if (long === 0){
    return ' -s'
  } else if(long === 1){
    return ' -l'
  } else {
    return ''
  }

};

function setOffensiveness (dirty){

  if (dirty === 1){
    return ' -o';
  } else {
    return '';
  };

};

// function options (long, dirty){
//   return setLength(long) + setOffensiveness(dirty)
// };
//
// exports.text = function(long, dirty){
//
//   var long    = parseInt(long),
//       dirty   = parseInt(dirty),
//       options = {};
//
//   fortune = execSync('fortune' + options(long, dirty));
//
//   return fortune;
//
// };

module.exports = function(long, dirty){

  var long    = parseInt(long),
      dirty   = parseInt(dirty);

  var methods = {
    options: function(){
      return setLength(long) + setOffensiveness(dirty);
    },
    text: function(){
      return execSync('fortune' + this.options());
    }
  };

  return methods;
};
