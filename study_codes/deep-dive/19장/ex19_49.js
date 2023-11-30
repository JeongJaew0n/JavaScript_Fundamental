function isInstanceOf(instance, constructorFunction) {
    const prototype = instance.__proto__;

    // 뭘 확인한다??
    // 해당 인스턴스의 프로토타입 체인에 해당 생성자 함수가 있는지.
    if(!prototype) {
        return false;
    }

    return prototype === constructorFunction.prototype || isInstanceOf(prototype, constructorFunction);
}

function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// const parent = {};

let parent = Object.create(null);
Person.prototype = parent;

Object.setPrototypeOf(me, parent);
