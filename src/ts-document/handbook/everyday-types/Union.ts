function print(args: number | string) {
    if (typeof args === "number") {
        console.log(typeof args);
    } else {
        console.log(args.toUpperCase());
    }
}

print(2);

function returnArgs(args: number | string) {
    if (typeof args === "number") {
        return args;
    }
    return args.toUpperCase();
}

returnArgs(2);