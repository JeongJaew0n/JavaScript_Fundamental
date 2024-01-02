// 1~100 까지 증가하는 iterator

function oneTo100() {
    let number = 0;

    return {
        [Symbol.iterator]() {return this},
        next() {
            number++;

            return {value:number, done: number > 100};
        }
    }
}

for(let n of oneTo100()) {
    console.log(n);
}