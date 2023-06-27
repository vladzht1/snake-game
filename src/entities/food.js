import { BLOCK_SIZE, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/window";
import { Vector2D } from "../graphics/vector";
import { getRandomInt } from "../utils/random";

export class Food {
  /** @private */
  position;

  static createFood() {
    let x = getRandomInt(2 * BLOCK_SIZE, CANVAS_WIDTH - 2 * BLOCK_SIZE);
    let y = getRandomInt(2 * BLOCK_SIZE, CANVAS_HEIGHT - 2 * BLOCK_SIZE);

    x = x % BLOCK_SIZE === 0 ? x : x - (x % BLOCK_SIZE);
    y = y % BLOCK_SIZE === 0 ? y : y - (y % BLOCK_SIZE);

    return new Food(new Vector2D(x, y));
  }

  constructor(position) {
    this.position = position;
  }

  regenerate() {
    this.position.moveTo(Food.createFood().getPosition());
  }

  getPosition() {
    return this.position;
  }
}
