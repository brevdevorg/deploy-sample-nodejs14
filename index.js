module.exports.handler = (request, response) => {
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, Brev!\n');

}
