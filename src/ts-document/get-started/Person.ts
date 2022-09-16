import {userInfo} from "os";

interface Person {
    firstName: string;
    lastName: string;
}

function person(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(user);
console.log(person(user))