var x = 'global';

function foo() {
    console.log("inner:",x);
    var x = 'local';
    hey((value) => {
        x = value;
    })
    console.log("inner after:", x);
}

foo();
console.log("outer:",x);

function hey(callbak) {
    callbak('hey');
}