namespace ExtendsType {
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