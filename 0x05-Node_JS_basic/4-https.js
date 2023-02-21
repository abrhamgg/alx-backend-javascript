const http = require('http');

const port = 1245;
const app = http.createServer((_req, res) => {
  res.end('Hello Holberton School!\n');
});

app.listen(port, () => {
  console.log('server has started');
});

module.exports = app;
