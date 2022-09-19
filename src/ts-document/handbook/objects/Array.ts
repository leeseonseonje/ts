import {log} from "util";

namespace ArrayDocs {

    let strings = ["A", "B", "C"];
    let array = new Array("A", "B", "C");

    function tupleTest() {
        return 10;
    }

    let tp: [string, number, boolean, Function] = ["A", 1, true, tupleTest];

    let tpElement = tp[3];
    console.log(tpElement());
    const [alphabet, one, is, fun] = tp;
    console.log(fun());

    type Either2dOr3d = [number, number, number?];

    function setCoordinate(coord: Either2dOr3d) {
        const [x, y, z] = coord;

        console.log(`Provided coordinates had ${coord.length} dimensions`);
    }

    setCoordinate([1, 2]);
    setCoordinate([1, 2, 3]);

    type StringNumberBooleans = [string, number, ...boolean[]];
    type StringBooleansNumber = [string, ...boolean[], number];
    type BooleansStringNumber = [...boolean[], string, number];
    type B = [string, number?];

    function stringNumberBooleans(args: StringNumberBooleans) {
        console.log(args.length);
    }

    stringNumberBooleans(["A", 1, true, false, true, false, true]);

    function booleansStringNumber(args: BooleansStringNumber) {
        console.log(args.length);
    }

    booleansStringNumber([true, true, false, false, false, true, "A", 1]);

}