function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

const parent = {};

Object.setPrototypeOf(me, parent);

console.log("나의 프로토타입이 Person인가?",me.__proto__ === Person.prototype);
console.log("parent의 생성자가 Person인가?",parent.constructor === Person);
console.log("나는 Person의 인스턴스인가?", me instanceof Person);

Person.prototype = parent;
console.log("===Person의 프로토타입에 parent 추가 후===")
console.log("나는 Person의 인스턴스인가?", me instanceof Person);