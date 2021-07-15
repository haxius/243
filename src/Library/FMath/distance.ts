import { IPoint2D } from "./models";

export const distance = (p1: IPoint2D, p2: IPoint2D): number =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
