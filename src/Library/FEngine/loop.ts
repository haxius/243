import { ICanvas } from "../FCanvas/models";
import { IScreen } from "./models";
import FCanvas from "../FCanvas";

let lastTime: number = 0;

export const loop =
  (
    canvas: ICanvas,
    screen: IScreen,
    tick: (delta: number) => void,
    clearFillStyle: string = "red",
    frameRate: number = 0
  ): FrameRequestCallback =>
  (thisTime: number) => {
    const finishUp = () => {
      FCanvas.clear(canvas.context2D(), screen, clearFillStyle);
      tick(thisTime - lastTime);
      lastTime = thisTime;
    };

    if (frameRate > 0) {
      if (thisTime - lastTime > 1000 / frameRate) {
        finishUp();
      }
    } else {
      finishUp();
    }

    window.requestAnimationFrame(
      loop(canvas, screen, tick, clearFillStyle, frameRate)
    );
  };
