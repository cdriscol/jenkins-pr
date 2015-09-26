describe('someClass', function() {
  var someClass;
  beforeEach(function(){
    someClass = new SomeClass();
  });
  
  it('should do something with a parameter', function() {
    someClass.doesSomethingWith('a');
    expect(1).toBeTruthy();
  });
});
