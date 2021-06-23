const fizzbuzzModel = require("../src/fizzbuzz");
const { expect } = require("chai");
const nock = require("nock");
const config = require("../config");

describe("FizzBuzz model", () => {
  describe("get", () => {
    it("fetches the fizzbuzz sequence from API", async () => {
      expect(await fizzbuzzModel.get(8)).to.deep.equal([
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
      ]);
    });
  });

  describe("getNumbers", () => {
    it("returns the numbers of the fizzbuzz sequence only", async () => {
      expect(await fizzbuzzModel.getNumbers(8)).to.deep.equal([
        "1",
        "2",
        "4",
        "7",
        "8",
      ]);
    });
  });
});
