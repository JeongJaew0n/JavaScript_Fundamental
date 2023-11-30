const person = {
    name: "Jeong"
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

console.log(Object.getOwnPropertyDescriptors(person)); // ES8 도입