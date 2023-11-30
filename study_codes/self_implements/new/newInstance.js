// new 연산자 처럼 동작하는 함수 만들어 보기


// newInstacne에 함수랑 매개변수랑 같이 넣어줄 텐데 그걸 다 알아야 함.
// 그러니 hasOwnProperty('prototype') 는 사용 불가.
// 1. constructor 함수가 있는지 검사
// 2. construcotr 함수 실행


/**
 * 고민1. 매개변수와 함께 알 수 있는 방법이 있을까...
 */

// 

let newInstance = function (obj, ...params) {
    if(!obj) return;

    if(obj.hasOwnProperty('prototype')) {
        let newThing = {};
        // if(Array.isArray(obj)) {
        //     newThing = [];
        // } else if(typeof obj === 'object'){
        //     newThing = {};
        // }
        let constructor = obj.prototype.constructor;
        constructor.apply(newThing, params);
        console.log("constructor:",constructor);
        return newThing;
    }
}

let myObject = function(value1, value2) {
    if(new.target) {
        this.name =  value1;
        this.job = value2;
    } else {
        console.error("use new");
    }
}

let myInstance = newInstance(myObject, 1,2,3);
// console.log(newInstance);
console.log("myInstance:",myInstance);

let arrayTest = newInstance(Array, 1,2,3);
console.log("arrayTest:",arrayTest);

let instance = new myObject(1,2);
// console.log(instance);
