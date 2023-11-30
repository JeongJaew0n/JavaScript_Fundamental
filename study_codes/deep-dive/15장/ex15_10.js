let foo = 1;

{
    console.log(foo);
    /**
     * Uncaught ReferenceError: Cannot access 'foo' before initialization
        at ex15_10.js:4:17
     */

    let foo = 999;
}