// interface Shape {
//     kind: "circle" | "square";
//     radius: number;
//     sideLength?: number;
// }

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;
//     }
// }

// type Shape = Circle | Square;
interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return "da";
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//             return _exhaustiveCheck;
//     }
// }