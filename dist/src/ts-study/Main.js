"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Member_1 = require("./Member");
class Main {
    getMember(username, age) {
        let member = new Member_1.Member(username, age);
        return member;
    }
}
let main = new Main();
let member = main.getMember("userA", 20);

console.log(member.getUsername);
console.log(member.getAge);
console.log(member);
//# sourceMappingURL=Main.js.map