namespace KeyOfDocs {

    type User = { name: string; age: number };
    type keyof1 = keyof User;

    function test(k: keyof1) {
        return k;
    }

    console.log(test("name"));
    console.log(test("age"));
}