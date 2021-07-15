import { IPlayer } from "./models";
import FMath from "../FMath";

export const player = (initialState: IPlayer): IPlayer => {
  const state = { ...initialState } as { [key: string]: any };

  const N = (NN: number | undefined = undefined, K: string): number =>
    typeof NN === "number" ? (state[K] = NN) : state[K];

  const X = (newX: number | undefined = undefined): number => N(newX, "X");

  const Y = (newY: number | undefined = undefined): number => N(newY, "Y");

  const angle = (newAngle: number | undefined = undefined): number =>
    N(newAngle, "angle");

  const speed = (newSpeed: number | undefined = undefined): number =>
    N(newSpeed, "speed");

  const angleSpeed = (newAngleSpeed: number | undefined = undefined): number =>
    N(newAngleSpeed, "angleSpeed");

  const tick = (delta: number): void => {
    state.angle += FMath.radians(state.angleSpeed);
    state.x += Math.cos(state.angle) * state.speed;
    state.y += Math.sin(state.angle) * state.speed;
  };

  return {
    X,
    Y,
    angle,
    speed,
    angleSpeed,
    tick,
  };
};
