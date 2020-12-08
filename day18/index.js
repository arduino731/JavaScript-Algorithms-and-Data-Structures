// import http module
const http = require('http');

// server configuration
const HOST = '127.0.0.1';
const PORT = 3000;

// create the server
const server = http.createServer((req, res) => {
  res.end('Hello!');
});

// make the server listen to requests
server.listen(PORT, HOST, () => {
  console.log(`Server running at: http://${HOST}:${PORT}/`);
});