// node inspect debugging.js
// debug>n      line by line
// debug>c      complete
// debug>repl   mode to change value

var person = {
  name: "TJChiang"
};

person.age = 23;

debugger; // debug point

person.name = "TJC";

console.log(person);
