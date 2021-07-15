import { IScreen } from "../FEngine/models";

export const clear = (
  context: CanvasRenderingContext2D,
  screen: IScreen,
  fillStyle: string = "red"
): void => {
  context.fillStyle = fillStyle;
  context.fillRect(0, 0, screen.width, screen.height);
};
