function displayMessage(params) {
  process.stdout.write(params);
  process.stdout.write('\n');
}

module.exports = displayMessage;
