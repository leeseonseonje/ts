namespace GenericDocs {

    function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key];
    }

    let x = {a: 1, b: 2, c: 3, d: 4};

    getProperty(x, "a");
    getProperty(x, "b");

    class BeeKeeper {
        hasMask: boolean;

        constructor(hasMask: boolean) {
            this.hasMask = hasMask;
        }
    }

    class ZooKeeper {
        nametag: string;

        constructor(nametag: string) {
            this.nametag = nametag;
        }
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper = new BeeKeeper(true);
    }

    class Lion extends Animal {
        keeper: ZooKeeper = new ZooKeeper("Lion");
    }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    console.log(createInstance(Lion).keeper.nametag);
    console.log(createInstance(Bee).keeper.hasMask);
}