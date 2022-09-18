class Fish {
    swim() {
        console.log("swim");
    }
}

class Bird {
    fly() {
        console.log("swim");
    }
}

let fish = new Fish();

move(fish);

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    console.log("fly")
    // return animal.fly();
}


function isFish(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

