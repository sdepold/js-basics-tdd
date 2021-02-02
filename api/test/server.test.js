const nock = require("nock");
const sinon = require("sinon");
const request = require("supertest");

const app = require("../src/server")();
const model = require("../src/fizzbuzz");
const fixture = require("./fizzbuzz-fixture");
const { fizzbuzz } = require("../config.json");

describe("API", () => {
  let mock;

  beforeEach(() => {
    nock.cleanAll();
    mock && mock.restore();
  });

  describe("GET /", () => {
    it("should return 404", async () => {
      await request(app).get("/").expect(404);
    });
  });

  describe("GET /fibbuzz/:n", () => {
    it("returns fizzbuzz(fib(1)) if n === 1", async () => {
      await request(app).get("/fibbuzz/1").expect(200, ["1"]);
    });

    it("returns fizzbuzz(fib(3)) if n === 3", async () => {
      nock(`${fizzbuzz.protocol}://${fizzbuzz.host}`)
        .get(`${fizzbuzz.path}?amount=2`)
        .reply(200, fixture(2));

      await request(app).get("/fibbuzz/3").expect(200, ["1", "2"]);
    });

    it("returns fizzbuzz(fib(8)) if n === 8", async () => {
      mock = sinon.mock(model);
      mock.expects("get").once().withArgs(21).returns(fixture(21));

      await request(app)
        .get("/fibbuzz/8")
        .expect(200, [
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
        ]);

      mock.verify();
    });
  });
});
