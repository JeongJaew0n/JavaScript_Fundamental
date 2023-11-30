var namedFunc = function foo() {};
namedFunc.name = "haha";

console.log(namedFunc.name); // foo

console.log(Object.getOwnPropertyDescriptor(namedFunc, 'name'));
/**
 * {value: 'foo', writable: false, enumerable: false, configurable: true}
 */

console.log(Object.keys(namedFunc));    // []

Object.defineProperty(namedFunc, 'name',{
    writable: true, enumerable: true, configurable: true
})

namedFunc.name = "gogogogogog";

console.log(Object.keys(namedFunc));    // ['name']
console.log(namedFunc.name); // gogogogogog;

Object.defineProperty(namedFunc, 'name',{
    writable: true, enumerable: true, configurable: false
})

namedFunc.name = "nananananan";

// Object.defineProperty(namedFunc, 'name',{
//     writable: false, enumerable: false, configurable: true
// })
/** 
 * test18_01.js:28 Uncaught TypeError: Cannot redefine property: name
    at Function.defineProperty (<anonymous>)
    at test18_01.js:28:8
 */

console.log(Object.keys(namedFunc));    // ['name']
console.log(namedFunc.name); // nananananan;