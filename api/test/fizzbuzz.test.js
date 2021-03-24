const fizzbuzzModel = require("../src/fizzbuzz");
const { expect } = require("chai");
const nock = require("nock");
const config = require("../config");

const fizzbuzz21 = [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz",
  "16",
  "17",
  "Fizz",
  "19",
  "Buzz",
  "Fizz",
];

describe("FizzBuzz model", () => {
  describe("get", () => {
    it("fetches the fizzbuzz sequence from API", async () => {
      expect(await fizzbuzzModel.get(21)).to.deep.equal(fizzbuzz21);
    });
  });

  describe("getNumbers", () => {
    it("returns the numbers of the fizzbuzz sequence only", async () => {
      expect(await fizzbuzzModel.getNumbers(21)).to.deep.equal([
        "1",
        "2",
        "4",
        "7",
        "8",
        "11",
        "13",
        "14",
        "16",
        "17",
        "19",
      ]);
    });
  });
});
