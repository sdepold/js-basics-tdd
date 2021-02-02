const server = require("./src/server")();
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Fibonacci API is now listening on port ${port}!`);
});
