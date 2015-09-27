var SomeClass = function() {}

SomeClass.prototype.doesSomethingWith = function(a) {
  if(a) console.log(a);
  else console.error('what do you want me to do something with?')
}
