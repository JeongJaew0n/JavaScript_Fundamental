function Person(name) {
    this.name = name;

    Person.prototype.sayHello = function() {
        console.log(`Say Hello ${name}`);
    }

    this.sayHo = function() {
        console.log(`${name} hoho`)
    }
}

Person.staticProp = "haha";

Person.staticMethod = function() {
    console.log("I'm HUMAN");
}

const me = new Person("jaewon");
const who = new Person("annoymouse");