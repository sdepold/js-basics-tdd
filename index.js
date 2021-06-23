module.exports = function fib(n) {
  if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
    // use case: invalid input causes undefined
    // return undefined;

    // use case: invalid input causes exception
    throw new Error("invalid input!");
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};
