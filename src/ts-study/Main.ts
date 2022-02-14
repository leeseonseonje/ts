import { Member } from "./Member";

class Main {

    getMember(username: string, age: number): Member {
        let member: Member = new Member(username, age);
        return member;
    }
}

export {Main}