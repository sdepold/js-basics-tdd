const express = require("express");
const fib = require("../..");
const fizzbuzz = require("./fizzbuzz");

module.exports = () => {
  const app = express();

  // app.get("/fibbuzz/:n", async (req, res) => {
  //   // You can access n via req.params.n; it will be a string

  //   const fibResult = fib(Number(req.params.n));
  //   const result = await fizzbuzz.get(fibResult);

  //   res.json(result);
  // });

  return app;
};
