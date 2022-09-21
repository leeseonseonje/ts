namespace ClassDocs {

    let x: number = 0;

    class C {
        x: string = "hello";

        m() {
            this.x = "world";
        }
    }

    class P {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        print(p: P) {
            console.log(p);
        }
    }

    let p = new P("private");
    console.log(p["name"])
    let p2 = new P("name");
    console.log(p2);

    class MyStaticClass {
        static doSomething() {}
        doSome() {}
    }

    function doSomething() {}

    const MyHelperObject = {
        dosomething() {},
    };

    MyStaticClass.doSomething();
    doSomething();
    MyHelperObject.dosomething();

    class G<T> {
        t: T;

        constructor(t: T) {
            this.t = t;
        }
    }

    let g = new G("T");
    let g1 = new G(1);
    console.log(typeof g.t);
    console.log(typeof g1.t);

    class MyClass {
        name = "MyClass";
        getName() {
            return this.name;
        }
    }
    const c = new MyClass();
    const obj = {
        name: "obj",
        getName: c.getName,
    };
    console.log(obj.getName());

    class Params {
        constructor(
            public readonly x: number,
            protected y: number,
            private z: number
        ) {
        }
    }
    const a = new Params(1, 2, 3);
    console.log(a.x);

    abstract class Base {
        abstract getName(): string;

        printName() {
            console.log("Hello, " + this.getName());
        }
    }

        class Derived extends Base {
        getName() {
            return "world";
        }
    }

    const d = new Derived();
    d.printName();

    function greet(ctor: new () => Base) {
        const instance = new ctor();
        instance.printName();
    }

    class Person {
        name: string;
        age: number;
    }

    class Employee {
        name: string;
        age: number;
        salary: number;
    }

    const pm: Person = new Employee();

    class Box {
        content: string = "";
        sameAs(other: this) {
            return other.content === this.content;
        }
    }

    class DerivedBox extends Box {
        otherContent: string = "?";
    }

    const base = new Box();
    const derived = new DerivedBox();
    derived.sameAs(derived);
    base.sameAs(derived);
}

export const createCatName = () => "fluffy";

const name = createCatName();
console.log(name);