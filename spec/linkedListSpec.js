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
});