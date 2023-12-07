let mybind  = function(obj) {
    let func = this;
    return function(...params) {
        return func.apply(obj, params);
    };
}

let simpleBind = function(obj) {
    return (...params) => {this.call(obj, ...params)};
}

Function.prototype.mybind = mybind;
Function.prototype.simpleBind = simpleBind;

let f = function(a,b,c) {
    console.log(this.name,a,b,c);
    // console.log(arguments);
}

function Circle() {
    
}


let o1 = {
    name: "o1",

    ping: f
};

let rf = f.bind(o1);

let mf = f.mybind(o1);

let sf = f.simpleBind(o1);

