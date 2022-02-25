module.exports = (tokens) => {
  // the variable `current` points to current token index
  let current = 0;

  // the function `createAST` is used for creating the AST using recursion
  function createAST() {
    // the variable `token` contains the current token
    let token = tokens[current];

    // checking if the `token` is a `number` token
    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // checking for a call expression => add, subtract
    // call expressions begins with the token type of parenthesis => ( add ... )
    // if the `token` is of type 'parenthesis', then create a CallExpression
    if (token.type === 'parenthesis' && token.value === '(') {
      // skip the opening parenthesis
      token = tokens[++current];

      // create a CallExpression
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // skip the name token
      token = tokens[++current];

      // there can be multiple nested call expression
      // call `createAST` recursively until we find a closing parenthesis
      while (
        token.type !== 'parenthesis' ||
        (token.type === 'parenthesis' && token.value !== ')')
      ) {
        node.params.push(createAST());
        token = tokens[current];
      }

      // skip the closing parenthesis
      current++;

      // return the node
      return node;
    }

    throw new Error(`No matching token type: ${token.type}`);
  }

  let ast = {
    type: 'Program',
    body: [],
  };

  // iterate over the `tokens` and create the ast
  while (current < tokens.length) {
    ast.body.push(createAST());
  }

  // return the ast
  return ast;
};
