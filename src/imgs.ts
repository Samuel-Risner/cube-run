function c(src: string): HTMLImageElement {
    const e = new Image();
    e.src = `assets/${src}`;
    e.onload = () => {
        
    }
    return e;
}
export const IMGS = {
    dev: {
        tile: c("dev/tile.png")
    }
};