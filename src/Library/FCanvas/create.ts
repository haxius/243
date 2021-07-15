import { ICanvas } from "./models";

export const create = (): ICanvas => {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  return {
    element: canvas,
    setWidth: (width: number) => {
      canvas.setAttribute("width", width.toString());
    },
    setHeight: (height: number) => {
      canvas.setAttribute("height", height.toString());
    },
    context2D: () => canvas.getContext("2d"),
  } as ICanvas;
};
