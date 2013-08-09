var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
  var child = makeTree();
  child.value = val;
  this.children.push(child);
};

treeMethods.contains = function(){
};
