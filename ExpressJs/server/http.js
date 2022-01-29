const http = require('http');
const url = require('url');

function logRequest({ method, url }) {
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
}

function pluralization(number, array) {
  let n = Math.abs(number);
  n = number % 100;
  if (n >= 5 && n <= 20) {
    return `${number}   ${array[2]}`;
  }
  n = number % 10;
  if (n === 1) {
    return `${number}   ${array[0]}`;
  }
  if (n >= 2 && n <= 4) {
    return `${number}   ${array[1]}`;
  }
  return `${number}   ${array[2]}`;
}

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const urlName = url.parse(req.url, true).pathname;
  logRequest(req);
  if (urlName === '/headers') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers));
  } else if (urlName === '/plural') {
    let { number, forms } = queryObject;
    const splitForms = forms.split(',');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(pluralization(number, splitForms));
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
})