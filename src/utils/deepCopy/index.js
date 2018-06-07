
module.exports = function(source) {
  let result;
  if(Array.isArray(source)) {
    return source.map(function(item){
      return item;
    })
  }
};
