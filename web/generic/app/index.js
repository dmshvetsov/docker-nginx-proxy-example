const http = require('http');
const msg = process.env.WEB_MESSAGE;
const name = process.env.WEB_NAME;
const port = process.env.WEB_PORT;

function requestHandler(req, res) {
  res.end(msg);
}

const httpServer = http.createServer((req, res) => requestHandler(req, res));
httpServer.listen(port, () => console.log(`Web ${name} is running on ${port}`));
