import { MemberInterface } from './MemberInterface';
declare class Member implements MemberInterface {
    private username;
    private age;
    constructor(username: string, age: number);
    getUsername(): string;
    getAge(): number;
}
export { Member };
