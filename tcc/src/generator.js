function getOperator(caller) {
  switch (caller) {
    // if caller function is `add`, return addition `+` operator
    case 'add':
      return '+';

    // if caller function is `subtract`, return addition `-` operator
    case 'subtract':
      return '-';

    // if caller function is `multiply`, return multiplication `*` operator
    case 'multiply':
      return '*';

    // if caller function is `divide`, return division `/` operator
    case 'divide':
      return '/';
  }
}

function generator(node) {
  switch (node.type) {
    // if node's type is `Program`, iterate over the node's body and generate each node
    case 'Program':
      return node.body.map(generator).join('\n');

    // if node's type is `ExpressionStatement`, iterate over the node expression and generate each node
    case 'ExpressionStatement':
      return generator(node.expression);

    // if node's type is `CallExpression`, iterate over the node argument and generate each node
    case 'CallExpression':
      return `(${node.arguments
        .map(generator)
        .join(getOperator(generator(node.caller)))})`;

    // if node's type is `Indentifier`, return node's name
    case 'Identifier':
      return node.name;

    case 'NumberLiteral':
      return node.value;

    default:
      throw new Error(`No matching type: $${node.type}`);
  }
}

module.exports = generator;
