const lexer = require('./lexer');
const parser = require('./parser');
const transformer = require('./transformer');
const generator = require('./generator');

module.exports = (input) => {
  // generate tokens
  const tokens = lexer(input);

  // parse the tokens
  const ast = parser(tokens);

  // create transformations
  const transformedAST = transformer(ast);

  // generate output
  const output = generator(transformedAST);

  // return the output
  return output;
};
