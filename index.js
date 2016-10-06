var http = require('http');
var host = "localhost";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, host);
console.log('Server running at http://host:8080/');
