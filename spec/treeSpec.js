describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should add a child when add child is called", function() {
    tree.addChild("first");
    expect(tree.children.length).toEqual(1);
  });

  it("should add a child to another child", function() {
    tree.addChild("first");
    tree.children[0].addChild("second");
    expect(tree.children[0].children.length).toEqual(1);
  });

  it("should return true if the passed in value exists", function() {
    tree.addChild("first");
    expect(tree.contains("first")).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  /*it("should'", function() {
    expect().to-();
  });

  it("should'", function() {
    expect().to-();
  });

  it("should'", function() {
    expect().to-();
  });*/
});