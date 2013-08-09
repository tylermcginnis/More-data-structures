var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
};

treeMethods.contains = function(){
};
