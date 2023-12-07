var Anna = (function(){

    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }

    Animal.prototype.constructor = null;    

    Animal.prototype.move = function(){
        return "이동";
    }

    return Animal;
})();

var Bird = (function() {

    function Bird() {
        this.wing = 2;
        Anna.apply(this,arguments);
    }

    // 아예 prototype 프로퍼티를 교체 한경우.
    Bird.prototype = Object.create(Anna.prototype);
    Bird.prototype.constructor = null;
    // 기존 prototype 프로퍼티가 아예 새로운 객체가 되니까 해당객체의 프로토타입이 Animal 이고 해당 객체는 생성자 함수가 아니니까 prototype도 constructor도 없으니까 Animal의 constructor를 가져온다.

    // console.log(Bird.prototype.hasOwnProperty('constructor'));

    Bird.prototype.fly = function() {
        console.log("난다 날아");
    }

    // prototype 프로퍼티의 프로토타입만 교체한 경우.
    // Bird.prototype.__proto__ = Anna.prototype;
    // 이건 기존 prototype 프로퍼티의 constructor가 변경되지 않았으므로 바꿔줄 필요가 없다.

    console.log(Bird.prototype);
    console.log(Bird.prototype.constructor);

    return Bird;
})();

var Pudding = (function() {

    function Pudding() {
        Bird.apply(this, arguments);
    }

    Pudding.prototype.__proto__ = Bird.prototype;

    return Pudding;
})();

let bird = new Bird("eagle",11);
let pud = new Pudding("hello",999);
