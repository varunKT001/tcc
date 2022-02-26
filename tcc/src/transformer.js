function traverser(ast, visitor) {
  // the function `traverseArray` is used to iterate over the array,
  // and call the `traverseNode` for items inside it.
  function traverseArray(array, parent) {
    array.forEach((node) => {
      traverseNode(node, parent);
    });
  }

  // the function `traverseNode` is used to perform enter and exit from the nodes
  function traverseNode(node, parent) {
    // the variable `methods` contains the enter and exit methods (if any) of the node
    let methods = visitor[node.type];

    // enter the node
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    if (node.type === 'Program') {
      traverseArray(node.body, node);
    } else if (node.type === 'CallExpression') {
      traverseArray(node.params, node);
    } else if (node.type === 'NumberLiteral') {
      // do nothing
    } else {
      throw new Error(`No matching type: ${node.type}`);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // start traversing
  traverseNode(ast, null);
}

module.exports = (ast) => {
  // the variable `newAST` contains the transformed ast
  let newAST = {
    type: 'Program',
    body: [],
  };

  // create a `context` from the old ast(ast) to the new ast(newAST)
  ast._context = newAST.body;

  // traverse the ast
  traverser(ast, {
    NumberLiteral: {
      enter: function (node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },
    CallExpression: {
      enter: function (node, parent) {
        // create a new node for expression
        let expression = {
          type: 'CallExpression',
          caller: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // define a new context on the node
        node._context = expression.arguments;

        // check for parent node's type
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression,
          };
        }
        parent._context.push(expression);
      },
    },
  });

  // return the new transformed ast
  return newAST;
};
