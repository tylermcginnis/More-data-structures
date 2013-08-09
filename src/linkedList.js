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
    if(list.head === list.tail){
      if(list.head === null){
        return null;
      }
      list.tail = null;
    }
    var tempHead = list.head.value;
    list.head = list.head.next;
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

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
