const compiler = require('./src/compiler');
const evaluate = require('./src/evaluate');
const fs = require('fs');
const path = require('path');

// input file
const filename = process.argv.slice(2)[0];

try {
  // get file path relative to project root
  const filepath = path.resolve(filename);

  // collect input from file
  const input = fs.readFileSync(filepath, 'utf8');

  // compile the file and get the output
  const output = compiler(input);

  // evaluate the output
  const evaluatedOutput = evaluate(output);

  // display result
  console.log(evaluatedOutput);
} catch (error) {
  console.log(error);
}
