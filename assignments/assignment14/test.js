function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var person = {
    firstName: 'Mai',
    lastName: 'Sadek'
};
console.log(greeter(person));
