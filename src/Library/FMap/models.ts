import { IPoint2D } from "../FMath/models";

export type TMapRow = number[];

export type TMap = TMapRow[];

export interface IMap {
  outOfMapBounds: (p: IPoint2D) => boolean;
  data: TMap;
}
