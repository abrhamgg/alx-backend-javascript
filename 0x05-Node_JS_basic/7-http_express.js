const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen('/students', (req, res) => {
  const data = countStudents(process.argv[2], 0);
  data.then((success) => {
    const output = `This is the list of our students\n${success}`;
    res.send(output);
  });
});

app.listen(port, () => {
  console.log('Server has started');
});

module.exports = app;
