const http = require('http');
const url = require('url');

function logRequest({ method, url }) {
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
}

function wordFrequency(string) {
  let splitString = string.replace(/[.,]/g, '').toLowerCase().split(/\s/);

  return splitString.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
}

function mostFrequent(object) {
  let counter = 0;
  let mostFrequent;

  for (let key in object) {
    let wordCount = object[key];
    if (counter < wordCount) {
      counter = wordCount;
      mostFrequent = key;
    }
  }

  return mostFrequent;
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

http.createServer((req, res) => {
  const splitUrl = req.url.split('?');
  const queryParams = splitUrl[1];
  const urlName = splitUrl[0];
  logRequest(req);

  if (urlName === '/headers') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers));
  }
  else if (urlName === '/plural') {
    const searchParams = new URLSearchParams(queryParams);
    const splitForms = searchParams.get('forms').split(',');
    const number = searchParams.get('number');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(pluralization(number, splitForms));
  }
  else if (urlName === '/frequency') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    })

    req.on('end', () => {
      const wordsCount = wordFrequency(data);

      res.setHeader("Most-popular-word", mostFrequent(wordsCount));
      res.setHeader("Unique-word-count", Object.keys(wordsCount).length);
      res.writeHead(201, { 'Content-Type': 'application/json' });

      res.end(JSON.stringify(wordsCount));
    })
  } else {
    res.writeHead(404, 'Not Found').end();
  }
}).listen(3000, () => {
  console.log(`Server started on localhost:${3000}`);
})