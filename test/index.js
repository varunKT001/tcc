const testLexer = require('./testLexer');
const testParser = require('./testParser');
const testTransformer = require('./testTransformer');

const tests = [
  {
    name: 'Lexer',
    tester: testLexer,
  },
  {
    name: 'Parser',
    tester: testParser,
  },
  {
    name: 'Transformer',
    tester: testTransformer,
  },
];

function init() {
  console.log('🚀 Running tests \n');
  tests.forEach((test, index) => {
    process.stdout.write(
      `(${index + 1}/${tests.length}) ${test.name} test running: `
    );
    try {
      test.tester();
      process.stdout.write('Pass ✅ \n');
    } catch (error) {
      process.stdout.write('Fail ❌ \n');
      process.exit(1);
    }
  });
}

init();
