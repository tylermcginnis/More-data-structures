describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should keep the tail's location up to date", function() {
    linkedList.addToTail("hi");
    expect(linkedList.tail.value).toEqual("hi");
    linkedList.addToTail("again");
    expect(linkedList.tail.value).toEqual("again");
  });

  // add more tests here to test the functionality of linkedList
  it("should set head when addToTail is first called & head remains the same after a tail is added", function() {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  })

  it("should set head when addToTail is first called & head remains the same after a tail is added", function() {
    linkedList.addToTail(1);
    expect(linkedList.head.value).toEqual(1);
    linkedList.addToTail(2);
    expect(linkedList.head.value).toEqual(1);
  });


  it("should make head undefined when removeHead is called", function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
  });

  it("should remove first node from list and return its value", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.removeHead()).toEqual(1);
  });


  it("should set head and tail to null if the object is empty or if only one node exists", function() {
    linkedList.addToTail(1);
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  })

});