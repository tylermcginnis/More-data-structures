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
      list.tail.previous = temp;
    } else {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    tailEqualsHead();
    var tempHead = list.head.value;
    list.head = list.head.next;
    list.head && (list.head.previous = null);
    return tempHead;
  };

  list.contains = function(val){
    if(list.head === null){
      return false;
    }

    var search = function(node){
      var result = false;
      if(node.value === val){
        result = true;
      } else if (node.next){
        result = search(node.next);
      }
      return result;
    };

    return search(list.head);
  };

  //for doubly linked list

  list.removeTail = function(){
    tailEqualsHead();
    list.tail = list.tail.previous;
    list.tail.next = null;
  };

  var tailEqualsHead = function(){
    if(list.head === list.tail){
      if(list.head === null){
        return null;
      }
      list.tail = null;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
