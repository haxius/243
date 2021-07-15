import { IPoint2D } from "../FMath/models";

export const line = (
  context: CanvasRenderingContext2D,
  p1: IPoint2D,
  p2: IPoint2D,
  strokeStyle: string
): void => {
  context.strokeStyle = strokeStyle;
  context.beginPath();
  context.moveTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.closePath();
  context.stroke();
};
