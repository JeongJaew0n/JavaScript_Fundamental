var x = 'global';

let x = 'test'; // 에러난다.
/**
 * Uncaught SyntaxError: Identifier 'x' has already been declared (at test15_01.js:3:5)
 */

console.log(x);