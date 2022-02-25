const testLexer = require('./testLexer');

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name} test passed`);
  } catch (error) {
    console.log(`❌ ${name} test failed`);
    process.exit(1);
  }
}

function init() {
  console.log('🚀 Running tests');

  test('Lexer', testLexer);
}

init();
