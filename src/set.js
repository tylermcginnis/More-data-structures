var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(obj){
  var key = Object.keys(obj);
  this._storage[key[0]] = obj[key[0]];
};

setPrototype.contains = function(){
};

setPrototype.remove = function(){
};
