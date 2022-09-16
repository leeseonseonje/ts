class Student {
    fullName: string;

    constructor(
        public firstName: string,
        private middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student("Lee", "S", "SeonJe");
console.log(user);
console.log(greeter({firstName: 'Lee', lastName: 'SeonJe'}));
console.log(greeter(user));