import { IPoint2D } from "../FMath/models";
import { TMap } from "./models";

export const outOfMapBounds = (map: TMap, p: IPoint2D) =>
  p.x < 0 || p.x >= map[0].length || p.y < 0 || p.y >= map.length;

export default outOfMapBounds;
