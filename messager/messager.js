const twas = require('twas');

module.exports.get = () => {
  return "Hello from NodeJS14! " + (twas(Date.now() - (5 * 1000)));
}
