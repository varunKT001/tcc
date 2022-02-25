const lexer = require('../tcc/lexer');
const assert = require('assert/strict');

const input = '( add 2 (subtract 2 4) )';

const lexerOutput = lexer(input);
const expectedLexerOutput = [
  { type: 'parenthesis', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'parenthesis', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '2' },
  { type: 'number', value: '4' },
  { type: 'parenthesis', value: ')' },
  { type: 'parenthesis', value: ')' },
];

module.exports = () => {
  assert.deepEqual(lexerOutput, expectedLexerOutput);
};
