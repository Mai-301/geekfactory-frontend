export class Person {
    constructor(public name: string) {

    }
    getRole() {

    }
    getInfo(): string {
        return `My name is ${this.name}. I am a ` + this.getRole() + '.';
    }

}

export class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    getRole(): string {
        return 'Student';
    }
}

export class Staff extends Person {
    constructor(name: string) {
        super(name);
    }
    getRole(): string {
        return 'Staff';
    }
}

export class Teacher extends Staff {
    constructor(name: string, public type: string) {
        super(name);
    }
    getInfo(): string {
        return super.getInfo() + ` I teach ${this.type}.`;
    }
}

