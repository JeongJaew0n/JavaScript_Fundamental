// const Person = function(name, age) {
//     this.name = name;
//     let _age = age;

//     Person.prototype.sayHo = function() {
//         return `hello everyone. My name is ${this.name} and my age is ${_age}`
//     }
// }

const Person = (function() {
        let _age = 0;
    
        function Person(name, age) {
            this.name = name;
            _age = age;
        }

        Person.prototype.sayHo = function() {
            return `hello everyone. My name is ${this.name} and my age is ${_age}`
        }

        return Person;
    })();
    

let person = new Person("king", 22);
console.log(person.sayHo());

let p2 = new Person("kaka", 99);
console.log(p2.sayHo());
console.log(person.sayHo());
