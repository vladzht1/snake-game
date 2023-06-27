// @flow

import { SNAKE_COLOR } from "../constants/colors";
import { DEFAULT_SNAKE_POSITION } from "../constants/game";
import { BLOCK_SIZE } from "../constants/window";
import { Direction, getOffsetByDirection, isValidDirectionString } from "../controls/directions";
import { Vector2D } from "../graphics/vector";

export class Snake {
  /** @private */
  positions;

  /** @private */
  currentOffset;

  static createSnake() {
    const snakePosition = [];

    for(const position of DEFAULT_SNAKE_POSITION) {
      const normalizedPositionX = position.getX() * BLOCK_SIZE;
      const normalizedPositionY = position.getY() * BLOCK_SIZE;

      snakePosition.push(new Vector2D(normalizedPositionX, normalizedPositionY));
    }

    return new Snake(snakePosition, SNAKE_COLOR);
  }

  constructor(positions) {
    this.positions = positions;
    this.currentOffset = this.calculateOffset(Direction.RIGHT);
  }

  move() {
    for(let i = 0; i < this.positions.length; i++) {
      const currentPosition = this.positions[i];
      const nextPosition = this.positions[i + 1];

      if(nextPosition) {
        currentPosition.moveTo(nextPosition);
      } else {
        currentPosition.move(this.currentOffset);
      }
    }
  }

  setMoveDirection(direction) {
    if(!isValidDirectionString(direction)) {
      return;
    }

    this.currentOffset = this.calculateOffset(direction);
  }

  increaseLength() {
    const tail = this.positions[0];
    const next = this.positions[1];

    const x = tail.getX() - next.getX() + tail.getX();
    const y = tail.getY() - next.getY() + tail.getY();

    const node = new Vector2D(x, y);

    this.positions = [node, ...this.positions];
  }

  getPosition() {
    return this.positions;
  }

  getHeadPosition() {
    return this.positions[this.positions.length - 1];
  }

  /**
   * Calculates the offset by the given direction. If snake can move in the given direction,
   * the offset is set as the previous state
   *
   * @private
   */
  calculateOffset(direction) {
    if(this.canMove(direction)) {
      this.currentOffset = getOffsetByDirection(direction);
    }

    return this.currentOffset;
  }

  /** @private */
  canMove(direction) {
    const head = Vector2D.createFrom(this.getPosition()[this.positions.length - 1]);
    const prev = Vector2D.createFrom(this.getPosition()[this.positions.length - 2]);

    const offset = getOffsetByDirection(direction);

    head.move(offset);

    return !head.equals(prev);
  }
}
