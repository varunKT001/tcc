const WHITE_SPACES = require('../regex/whitespace');
const NUMBERS = require('../regex/numbers');
const LETTERS = require('../regex/letters');

module.exports = (input) => {
  // The variable `current` acts as cursor pointing to current location of our input string
  let current = 0;

  // Tokens are reserved keywords or symbols used in our code
  // A `tokens` array will be used to keep track of our tokens
  let tokens = [];

  // Iterating over the input string:
  // if there is a valid token present, then push it onto the `tokens` array,
  // else throw an error
  while (current < input.length) {
    // The variable `char` will be used to check if the character at the `current index is a token or not
    let char = input[current];

    // Checking for an open parenthesis
    if (char === '(') {
      tokens.push({
        type: 'parenthesis',
        value: '(',
      });
      current++;
      continue;
    }

    // Checking for a closing parenthesis
    if (char === ')') {
      tokens.push({
        type: 'parenthesis',
        value: ')',
      });
      current++;
      continue;
    }

    // Checking for whitespaces
    // if `char` is a whitespace, then ignore it and continue the iteration
    if (WHITE_SPACES.test(char)) {
      current++;
      continue;
    }

    // Checking for numbers
    // if `char` is a number, then iterate through the string util we get a non-number character
    if (NUMBERS.test(char)) {
      // The variable `value` will contain the subsequent number characters
      let value = '';

      // Loop through all the subsequent characters
      // if the `char` is a number, then concatenate it with `value`
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // push the `value` to the `tokens`
      tokens.push({
        type: 'number',
        value,
      });

      // continue to the iteration
      continue;
    }

    // Checking for keywords: add, subtract etc.
    // if the `char` is a letter, then iterate further until we get a non-letter
    if (LETTERS.test(char)) {
      // The variable `value` will contain the subsequent letter characters
      let value = '';

      // Loop through all the subsequent characters
      // if the `char` is a letter, then concatenate it with `value`
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // push the `value` to the `tokens`
      tokens.push({
        type: 'name',
        value,
      });

      // continue to the iteration
      continue;
    }

    throw new Error(`Unknown token: ${char}`);
  }

  // return the tokens to the calling function
  return tokens;
};
