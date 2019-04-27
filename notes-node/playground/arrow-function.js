var square = x => {
  var result = x * x;
  return result;
};
console.log(square(9));

var user = {
  name: "TJChiang",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi! I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi! I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt("Hi", "Hello");
