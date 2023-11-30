const Person = (function() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        sayHello() {
            console.log(`HI! My name is ${this.name}`);
        }
    }

    return Person();
})();

const me = new Person('Lee');