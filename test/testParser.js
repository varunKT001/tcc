const parser = require('../tcc/parser');
const assert = require('assert/strict');

const input = [
  { type: 'parenthesis', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'parenthesis', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'parenthesis', value: ')' },
  { type: 'parenthesis', value: ')' },
];

const parserOutput = parser(input);
const expectedParserOutput = {
  type: 'Program',
  body: [
    {
      type: 'CallExpression',
      name: 'add',
      params: [
        {
          type: 'NumberLiteral',
          value: '2',
        },
        {
          type: 'CallExpression',
          name: 'subtract',
          params: [
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
  ],
};

module.exports = () => {
  assert.deepEqual(parserOutput, expectedParserOutput);
};
