import Step from "./step";
import { T_Directions } from "./types";

export default class Path {

    steps: Step[] = [];
    stepsToDraw: Step[] = [];

    constructor(directions: T_Directions[]) {

        let previousStep: null | Step = null;

        directions.forEach((dir) => {
            const s = new Step(previousStep, dir);

            this.steps.push(s);
            this.stepsToDraw.push(s);

            previousStep = s;
        });
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.stepsToDraw.forEach((s) => {
            s.draw(ctx);
        });
    }
}