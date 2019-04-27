const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {

  describe("#add", () => {
    it("should add two numbers", () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA("number");
      //   if (res !== 44) {
      //     throw new Error(`Expected 44, but got ${res}.`);
      //   }
    });
  });

  describe("#square", () => {
    it("should square a number", () => {
      var res = utils.square(10);

      expect(res).toBe(100).toBeA("number");
    });
  });

  describe("#async", () => {
    it("should async add two numbers", done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum).toBe(7).toBeA("number");
        done();
      });
    });
    it("should async square a number", done => {
      utils.asyncSquare(10, product => {
        expect(product).toBe(100).toBeA("number");
        done();
      });
    });
  });

  it("should set firstName and lastName", () => {
    var user = { location: "Taipei", age: 24 };
    var res = utils.setName(user, "TJ Chiang");

    expect(res).toEqual(user);
    //   expect(res).toInclude({
    //     firstName: "TJ",
    //     lastName: "Chiang"
    //   });
  });
});

// it("should expect some values", () => {
//   expect({ name: "TJChiang" }).toEqual({ name: "TJChiang" });
//   expect([2, 3, 4]).toExclude(5);
//   expect({
//     name: "TJChiang",
//     age: 24
//   }).toExclude({
//     age: 23
//   });
// });
