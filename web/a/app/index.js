const http = require('http');

function requestHandler(req, res) {
  res.end('Web A');
}

const httpServer = http.createServer((req, res) => requestHandler(req, res));
httpServer.listen(8081, () => console.log('Web A is running on 8081'));
