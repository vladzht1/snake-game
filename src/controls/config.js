import { Direction } from "./directions";

export const SPACE = 32;
export const ARROW_UP = 38;
export const ARROW_DOWN = 40;
export const ARROW_LEFT = 37;
export const ARROW_RIGHT = 39;

export const controlsConfig = {
  [ARROW_UP]: Direction.UP,
  [ARROW_DOWN]: Direction.DOWN,
  [ARROW_LEFT]: Direction.LEFT,
  [ARROW_RIGHT]: Direction.RIGHT
};
