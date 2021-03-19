const fetch = require("node-fetch");
const { fizzbuzz } = require("../config.json");

module.exports = {
  get(n) {
    return fetch(`${fizzbuzz.host}${fizzbuzz.basePath}?amount=${n}`).then((res) => res.json());
  },

  getNumbers(n) {
    return this.get(n).then(result => result.filter(Number));
  }
};
