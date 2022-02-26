const generator = require('../tcc/src/generator');
const assert = require('assert/strict');

const input = {
  type: 'Program',
  body: [
    {
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        caller: {
          type: 'Identifier',
          name: 'add',
        },
        arguments: [
          {
            type: 'NumberLiteral',
            value: '2',
          },
          {
            type: 'CallExpression',
            caller: {
              type: 'Identifier',
              name: 'subtract',
            },
            arguments: [
              {
                type: 'NumberLiteral',
                value: '4',
              },
              {
                type: 'NumberLiteral',
                value: '2',
              },
            ],
          },
        ],
      },
    },
  ],
};

const generatorOutput = generator(input);
const expectedGeneratorOutput = '(2+(4-2))';

module.exports = () => {
  assert.deepEqual(generatorOutput, expectedGeneratorOutput);
};
