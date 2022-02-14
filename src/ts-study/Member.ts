import {MemberInterface}  from './MemberInterface';

class Member implements MemberInterface {

    private username: string;
    private age: number;
    
    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }

    getUsername(): string {
        return this.username;
    }

    getAge(): number {
        return this.age;
    }
}

export {Member}