// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  var first =0;
  var last =0;

  list.addToTail = function(val){
    var temp = list.tail;
    list.tail = makeNode(val);
    if(temp){
      temp.next = list.tail;
    }
    /*list.tail.next = makeNode(val);
    list.tail = list.tail.next;*/
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
