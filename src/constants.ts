const CANVAS_W = 300;
const CANVAS_H = CANVAS_W;
const TILE_W = 64;
const TILE_H = 34;

const CONSTANTS = {
    tile: {
        PX_DIF_TL: { x: -TILE_W/2, y: -TILE_H/2 + 1 },
        PX_DIF_TR: { x:  TILE_W/2, y: -TILE_H/2 + 1 },
        PX_DIF_BR: { x:  TILE_W/2, y:  TILE_H/2 - 1 },
        PX_DIF_BL: { x: -TILE_W/2, y:  TILE_H/2 - 1 },
        POS_INIT: { x: (CANVAS_W/2), y: CANVAS_H/2 }
    },
    canvas: {
        W: CANVAS_W,
        H: CANVAS_H
    }
}

export default CONSTANTS;