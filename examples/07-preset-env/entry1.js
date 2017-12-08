import '@babel/polyfill';

function* gen() {
  yield 'hello';
  yield 'hi';
}

console.log(Array.from(gen()));
