const fetch = require("node-fetch");
const { fizzbuzz } = require("../config.json");
const fizzBuzzUrl = `${fizzbuzz.protocol}://${fizzbuzz.host}${fizzbuzz.path}`;

module.exports = {
  get(n) {
    return fetch(`${fizzBuzzUrl}?amount=${n}`).then((res) => res.json());
  },
};
