import { OFFSET_BY_DIRECTION } from "../constants/game";
import { BLOCK_SIZE } from "../constants/window";

/**
 * This class contains the constant static fields that represent directions
 */
export class Direction {
  static UP    = "up";
  static DOWN  = "down";
  static LEFT  = "left";
  static RIGHT = "right";

  /** @private */
  direction;

  constructor(direction) {
    this.direction = direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }
}

export const isValidDirectionString = (value) => {
  return Direction.UP    === value
      || Direction.DOWN  === value
      || Direction.LEFT  === value
      || Direction.RIGHT === value;
};

export const getOffsetByDirection = (direction) => {
  if(!isValidDirectionString(direction)) {
    throw new Error(`Invalid direction: ${direction}`);
  }

  return OFFSET_BY_DIRECTION[direction].multiplyByNumber(BLOCK_SIZE);
};
