function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(`${s}: ${alignment}`);
}
printText("Hello, world", "left");
printText("G'day, mate", "center");

function handleRequest(url: string, method: "GET" | "POST"): void {
    console.log(`${url} : ${method}`)
}
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

const obj = {x: 5, y: 10}

class Literal {
    x: number;
    y: number;
}

function literal(literal: Literal) {
    return literal;
}

console.log(literal(obj));
