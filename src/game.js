import { FOOD_COLLISION, RENDER_INTERVAL } from "./constants/game";
import { SPACE, controlsConfig } from "./controls/config";
import { Direction } from "./controls/directions";
import { createKeyboardClickEvent, removeKeyboardClickEvent } from "./controls/handlers";
import { Food } from "./entities/food";
import { Snake } from "./entities/snake";
import { checkCollision } from "./game/collision";
import { clearCanvas, renderBorders, renderFood, renderSnake } from "./graphics/render";
import { Score } from "./graphics/ui";

export class Game {
  /** @private */
  ctx;

  /** @private */
  snake;

  /** @private */
  food;

  /** @private */
  score;

  /** @private */
  moveDirection;

  /** @private */
  running;

  /** @private */
  loop;

  constructor(ctx) {
    this.ctx = ctx;
    this.snake = Snake.createSnake();
    this.food = Food.createFood();
    this.score = new Score("ui__score-field");

    this.moveDirection = new Direction(Direction.RIGHT);
    this.running = true;
  }

  start() {
    createKeyboardClickEvent(this.onKeyboardClick);
    renderBorders(this.ctx);

    this.score.updateUI();

    this.loop = setInterval(() => this.running && this.update(), RENDER_INTERVAL);
  }

  update() {
    this.snake.move();

    this.render();
    this.handleCollision();
  }

  toggleRunning() {
    this.running = !this.running;
  }

  handleCollision() {
    const collision = checkCollision(this.ctx, this.snake, this.food);

    if(collision < 0) {
      this.onGameOver();
    }
    else if(collision === FOOD_COLLISION) {
      this.onFoodCollision();
    }
  }

  render() {
    clearCanvas(this.ctx);
    renderSnake(this.ctx, this.snake);
    renderFood(this.ctx, this.food);
  }

  onKeyboardClick = (event) => {
    const keyCode = event.keyCode;

    if(keyCode === SPACE) {
      this.toggleRunning();
    } else {
      this.snake.setMoveDirection(controlsConfig[keyCode]);
    }
  };

  onFoodCollision() {
    this.score.increaseScore(10);
    this.snake.increaseLength();
    this.food.regenerate();
  }

  onGameOver() {
    removeKeyboardClickEvent(this.onKeyboardClick);
    clearInterval(this.loop);

    document.querySelector(".ui__game-over").classList.remove("disabled");
    document.querySelector(".ui__game-over__score").innerHTML = this.score.getScore();

    console.log("GAME OVER!");
  }
}
