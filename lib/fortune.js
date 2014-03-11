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

module.exports = function(long, dirty){

  var long    = parseInt(long),
      dirty   = parseInt(dirty);

  var methods = {
    options: function(){
      return setLength(long) + setOffensiveness(dirty);
    },
    text: function(){

      if (execSync('command -v fortune >/dev/null 2>&1') !== ''){
        return execSync('fortune' + this.options());
      } else {
        return "It looks like you don't have the Fortune program. Check README.md to install instructions.";
      }

    }
  };

  return methods;
};
