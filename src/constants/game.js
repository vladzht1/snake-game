import { Direction } from "../controls/directions";
import { Vector2D } from "../graphics/vector";

export const RENDER_INTERVAL = 150;

export const DEFAULT_SNAKE_POSITION = [
  new Vector2D(2, 2),
  new Vector2D(3, 2),
  new Vector2D(4, 2),
  new Vector2D(5, 2),
  new Vector2D(6, 2)
];

export const OFFSET_BY_DIRECTION = {
  [Direction.UP]: new Vector2D(0, -1),
  [Direction.DOWN]: new Vector2D(0, 1),
  [Direction.LEFT]: new Vector2D(-1, 0),
  [Direction.RIGHT]: new Vector2D(1, 0),
};

export const SELF_COLLISION = -2;
export const BORDER_COLLISION = -1;
export const NO_COLLISION = 0;
export const FOOD_COLLISION = 1;
