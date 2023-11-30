const person = {};

Object.defineProperty(person, 'firstName', {
    value: "TopGun",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(person,'firstName'));

Object.defineProperty(person, 'lastName', {
    value: "Maburik",
});

console.log(Object.getOwnPropertyDescriptor(person,'lastName'));

console.log(Object.keys(person)); // ['firstName'] lastName은 출력되지 않음

person.firstName = "En";
person.lastName = "GaNu";

console.log(person.firstName);
console.log(person.lastName);

delete person.firstName;
delete person.lastName;
console.log(person.firstName);
console.log(person.lastName);   // 삭제 안됨. 왜냐? configurable 이 false 니까.

