import {Main} from './Main';
import {Member} from './Member';

let main: Main = new Main();
let member: Member = main.getMember("userA", 20);
console.log(member.getUsername());
console.log(member.getAge());
console.log(member);
console.log("hello" + member.getUsername());

console.log(wrapInArray("hello"));

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    } else {
      return obj;
    }
}

