let counter = (function makeCounter() {
    let count = 0;

    return function(callback) {
        if(callback) {
            count = callback(count);
        }
        return count;
    }
})();

let increase = function(n) {
    return ++n;
}

let decrease = function(n) {
    return --n;
}

counter(increase);