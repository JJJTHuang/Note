var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  console.log(filter(line))
  process.exit(0);
})

function filter(str) {
  return ('[' + str.replace(/\[|\]/g, '') + ']')
}