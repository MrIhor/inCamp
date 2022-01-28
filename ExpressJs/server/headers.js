const http = require('http');

function logRequest({ method, url }) {
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
}

const server = http.createServer((req, res) => {
  if (req.url === '/headers') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers));
  } else {
    res.writeHead(404, 'Not Found');
    res.end()
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server started on ${port}`);
})