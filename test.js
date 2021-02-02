const fib = require("./index");
const { expect } = require("chai");

describe("fib", () => {
  it("should return 1 for index 1", () => {
    expect(fib(1)).to.equal(1);
  });

  it("should return 5 for index 5", () => {
    expect(fib(5)).to.equal(5);
  });

  it("should return 21 for index 8", () => {
    expect(fib(8)).to.equal(21);
  });


  it("should xxx8", () => {
    expect(fib(100)).to.equal(354224848179262000000);
  });

  it("should return undefined for negative numbers", () => {
    expect(fib(-1)).to.be.undefined;
  });
});
