import CONSTANTS from "./constants";
import Path from "./path";

const ROOT = document.getElementById("root") as HTMLDivElement;
const CANVAS = document.createElement("canvas");
ROOT.appendChild(CANVAS);
const ctx = CANVAS.getContext("2d") as CanvasRenderingContext2D;

ctx.canvas.width = CONSTANTS.canvas.W;
ctx.canvas.height = CONSTANTS.canvas.H;
ctx.imageSmoothingEnabled = false;

async function main() {
    await new Promise(r => setTimeout(r, 200));
    const p = new Path([-1, 1, 0, 0, 0, 3, 3, 3, 2]);
    p.draw(ctx);
}

main();