const sinon = require("sinon");
const request = require("supertest");

const app = require("../src/server")();
const model = require("../src/fizzbuzz");

describe("API", () => {
  describe("GET /", () => {
    it("should return 404", async () => {
      await request(app).get("/").expect(404);
    });
  });

  describe("GET /fibbuzz/:n", () => {
    // your test cases go here
  });
});
