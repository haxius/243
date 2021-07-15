import { IPoint2D } from "../FMath/models";

export const rect = (
  context: CanvasRenderingContext2D,
  location: IPoint2D,
  size: IPoint2D,
  fillStyle: string
): void => {
  context.fillStyle = fillStyle;
  context.fillRect(location.x, location.y, size.x, size.y);
};
