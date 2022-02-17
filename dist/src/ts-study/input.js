"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = require("./Main");
let main = new Main_1.Main();
let member = main.getMember("userA", 20);
console.log(member.getUsername());
console.log(member.getAge());
console.log(member);
console.log("hello" + member.getUsername());
//# sourceMappingURL=input.js.map