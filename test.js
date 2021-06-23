const fib = require("./index");
const { expect } = require("chai");

describe("fib", () => {
  it("should return 0 for index 0", () => {
    expect(fib(0)).to.equal(0);
  });

  it("should return 1 for index 1", () => {
    expect(fib(1)).to.equal(1);
  });

  it("should return 5 for index 5", () => {
    expect(fib(5)).to.equal(5);
  });

  it("should return 21 for index 8", () => {
    expect(fib(8)).to.equal(21);
  });

  it("calculates the golden ratio if two consecutive fib numbers are divided", () => {
    expect(fib(11) / fib(10)).to.be.closeTo(1.618, 0.1);
  });

  // use case: invalid input causes undefined
  xit("should return undefined for negative numbers", () => {
    expect(fib(-1)).to.be.undefined;
  });

  // use case: invalid input causes exception
  it("should return undefined for negative numbers", () => {
    expect(() => fib(-1)).to.throw("invalid input!");
  });
});
