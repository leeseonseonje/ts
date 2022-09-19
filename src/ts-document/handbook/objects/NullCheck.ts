class Sha {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface PaintOptions {
    shape: Sha;
    xPos?: number;
    yPos?: number;

}

function paintShaped(opts: PaintOptions) {
    let xPos = opts.xPos;
    console.log(xPos);
    let yPos = opts.yPos;
    console.log(xPos);
}

let sha = new Sha("ds");
paintShaped({shape: sha});

let ewq = null;
let ewq2 = undefined;



