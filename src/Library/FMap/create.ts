import { IPoint2D } from "../FMath/models";
import { IMap, TMap } from "./models";
import outOfMapBounds from "./outOfMapBounds";

export const create = (map: TMap) =>
  ({
    data: map,
    outOfMapBounds: (p: IPoint2D) => outOfMapBounds(map, p),
  } as IMap);

export default create;
