"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Member_1 = require("./Member");
class Main {
    getMember(username, age) {
        let member = new Member_1.Member(username, age);
        return member;
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map