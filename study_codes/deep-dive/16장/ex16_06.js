const person = {
    firstName: "Jeong",
    lastName: "jaewon",
    fullName: "what",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this. firstName, this.lastName] = name.split(' ');
    },
}

console.log(person.fullName);
person.fullName = "Doom GangSeon";
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);