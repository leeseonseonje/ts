interface StringArray {
    readonly [index: number]: string;
}

function getS() {
    return {n: 1};
}

let sdaw: StringArray = {
    1: "s",
    2: "A",
    3: "D",
}
console.log(sdaw);

namespace index {

    interface Colorful {
        color: string;
    }

    interface Circle {
        radius: number;
    }

    interface ColorfulCircle extends Colorful, Circle {
    }

    const circle: ColorfulCircle = {
        color: "red",
        radius: 42,
    }
    console.log(circle)

    type Type = Colorful & Circle;

    function test(x: Type) {
        console.log(x);
    }

    test(circle);
}
