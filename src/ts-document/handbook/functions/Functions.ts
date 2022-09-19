function greeter(fn: (a: string) => string) {
    let s = fn("greeter");
    console.log(s);
}

greeter(s => s);

type GreetFunction = (a: string) => string;

function greeter2(fn: GreetFunction) {
    let s = fn("greeter2");
    console.log(s);
}

greeter2(s => s.toUpperCase());

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

const fn = function (n: number) {
    return n + 1 > 1;
};
fn.description='BLACK';

doSomething(fn);

class Some {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
type SomeConstructor = {
    new (s: string): Some;
};

function constructorFunction(ctor: SomeConstructor) {
    console.log(new ctor("hello"));
}

const fn2 = function (some: Some) {
    return Some;
};

constructorFunction(fn2(new Some("some")));

function firstElement<T>(arr: T[]) {
    return arr[0];
}

let strings = ["A", "B", "C"];
let s1 = firstElement(strings);
console.log(typeof s1)

let numbers = [1, 2, 3];
let n = firstElement(numbers);
console.log(typeof n)

let numbers1 = strings.map(s => 2);
console.log(numbers1)
console.log(typeof numbers1)

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

class Len {
    name: string
    length: number;

    constructor(name: string, length: number) {
        this.name = name;
        this.length = length;
    }
}
function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return obj;
    }
}

let s: string = "hello";
let minimumLength1 = minimumLength(new Len("s", 1), 10);
console.log(minimumLength1);

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
let combine1 = combine<string | number>(["A", "B", "C"], [1, 2, 3]);
console.log(combine1);

function combineTest<T, U>(s: T, n: U) {
    console.log(`result = ${s}, ${n}`);
}

combineTest("s", 1);
combineTest<string, number>("s", 1);

class A {
    a: string;
    constructor(a: string) {
        this.a = a;
    }
}

class B extends A {
    b: string;
    constructor(a: string, b: string) {
        super(a);
        this.b = b;
    }
}

function ab<T extends any>(a: T) {
    console.log(a instanceof B);
}

let a = new A("A");
ab(a);
let b = new B("A", "B");
ab(b);

function f(x?: number) {
    console.log(`x = ${x}`);
}

f();
f(5);