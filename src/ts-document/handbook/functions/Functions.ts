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
    new(s: string): Some;
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
f(undefined);

function f2(x = 10) {
    console.log(x);
}
f2();
f2(5);

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

function fnn(x: boolean): void;
// Argument type isn't right
function fnn(x: boolean): void;
function fnn(x: boolean) {}

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

console.log(arr1);

const args = [8, 5] as const;
const angle = Math.atan2(...args);

function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
}

