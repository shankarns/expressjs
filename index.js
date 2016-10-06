var http = require('http');
var host = "localhost";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, host);
console.log('Server running at http://localhost:3000/');
