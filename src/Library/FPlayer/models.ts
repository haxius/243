import { IEntity } from "../FEngine/models";

export interface IPlayer extends IEntity {
  X: number | ((newValue: number | undefined) => number);
  Y: number | ((newValue: number | undefined) => number);
  angle: number | ((newValue: number | undefined) => number);
  speed: number | ((newValue: number | undefined) => number);
  angleSpeed: number | ((newValue: number | undefined) => number);
}
