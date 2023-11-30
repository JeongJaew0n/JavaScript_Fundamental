var x = 1;

function foo() {
    var x = 10;
    boo();
}

function boo() {
    console.log(x);
}

foo(); // 내 예상: 10 | real: 1
boo(); // 내 예상: 1  | real: 1