function greeter(person: IPerson) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
interface IPerson {
    firstName: String,
    lastName: String
}
var person = {
    firstName: 'Mai',
    lastName: 'Sadek'
}
console.log(greeter(person));