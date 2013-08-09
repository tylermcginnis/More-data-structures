// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    var temp = list.tail;
    list.tail = makeNode(val);
    if(temp){
      temp.next = list.tail;
    } else {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    var tempHead = list.head.value;
    list.head = list.head.next;
    return tempHead;
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
