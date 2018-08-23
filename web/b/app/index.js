const http = require('http');

function requestHandler(req, res) {
  res.end('Web B');
}

const httpServer = http.createServer((req, res) => requestHandler(req, res));
httpServer.listen(8082, () => console.log('Web B is runnong on 8082'));
