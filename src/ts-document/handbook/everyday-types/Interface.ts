interface Interface {
    name: string;
    age: number;
}

interface Interface {
    plus: string;
}

function getInterface(interface: Interface) {
    return interface.name;
}

console.log(getInterface({name: "seonJe", age: 25, plus: "plus"}));

interface Extends extends Interface {
    add: string;
}

function getExtends(ex: Extends) {
    return ex.add;
}

console.log(getExtends({name: "je", age: 25, add: "add", plus: "plus"}));

// type Window = {
//     title: string
// }
//
// type Window = {
//     ts: TypeScriptAPI
// }
