var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  var values = this._storage.get(i) || [];
  values.push([k,v]);
  this._storage.set(i, values);
};

HashTable.prototype.retrieve = function(k){
  var value;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var elements = this._storage.get(i); //this is our problem
  console.log(elements);
  _.each(elements, function(el){
    if(el[0] === k){
      value = el[1];
    }
  });

  return value;
};/*elements = an array of arrays
not sure about test, need to get value from an array in elements
*/

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
