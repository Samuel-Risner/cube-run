import CONSTANTS from "./constants";
import { IMGS } from "./imgs";
import { T_Directions } from "./types";

function calculatePos(x: number, y: number, pos: T_Directions): { x: number, y: number } {
    switch (pos) {
        case -1:
            return { x: x, y: y };
        case 0:
            return {
                x: x + CONSTANTS.tile.PX_DIF_TL.x,
                y: y + CONSTANTS.tile.PX_DIF_TL.y,
            }
        case 1:
            return {
                x: x + CONSTANTS.tile.PX_DIF_TR.x,
                y: y + CONSTANTS.tile.PX_DIF_TR.y,
            }
        case 2:
            return {
                x: x + CONSTANTS.tile.PX_DIF_BR.x,
                y: y + CONSTANTS.tile.PX_DIF_BR.y,
            }
        case 3:
            return {
                x: x + CONSTANTS.tile.PX_DIF_BL.x,
                y: y + CONSTANTS.tile.PX_DIF_BL.y,
            }
    }
}

export default class Step {

    pos: { x: number, y: number } = CONSTANTS.tile.POS_INIT;

    constructor(previousStep: Step | null, direction: T_Directions) {
        if (previousStep !== null) this.pos = calculatePos(previousStep.pos.x, previousStep.pos.y, direction);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(IMGS.dev.tile, this.pos.x, this.pos.y);
    }
}