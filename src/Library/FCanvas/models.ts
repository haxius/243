export interface ICanvas {
  element: HTMLCanvasElement;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  context2D: () => CanvasRenderingContext2D;
}
