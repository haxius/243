export interface IScreen {
  width: number;
  height: number;
  aspect: number;
}

export interface IRay {
  angle: number;
  distance: number;
  vertical: boolean;
}

export interface IGrid {
  cellSize: number;
  playerSize: number;
}

export interface ISystem {
  screen: IScreen;
  grid: IGrid;
  fov: number;
}

export interface IEntity {
  tick?: (delta: number) => void;
}
