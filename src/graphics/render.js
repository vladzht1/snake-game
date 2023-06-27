import { BORDER_COLOR, FOOD_COLOR, SNAKE_COLOR } from "../constants/colors";
import { BLOCK_SIZE, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/window";

export const renderSnake = (ctx, snake) => {
  snake.getPosition().forEach(position => {
    ctx.fillStyle = SNAKE_COLOR;
    ctx.fillRect(position.getX(), position.getY(), BLOCK_SIZE, BLOCK_SIZE);
  });
};

export const renderFood = (ctx, food) => {
  const position = food.getPosition();

  ctx.fillStyle = FOOD_COLOR;
  ctx.fillRect(position.getX(), position.getY(), BLOCK_SIZE, BLOCK_SIZE);
};

export const renderBorders = (ctx) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  ctx.fillStyle = BORDER_COLOR;

  ctx.fillRect(0, 0, width, BLOCK_SIZE);
  ctx.fillRect(0, height - BLOCK_SIZE, width, BLOCK_SIZE);
  ctx.fillRect(0, 0, BLOCK_SIZE, height);
  ctx.fillRect(width - BLOCK_SIZE, 0, BLOCK_SIZE, height);
};

export const clearCanvas = (ctx) => {
  ctx.fillStyle = "white";
  ctx.fillRect(BLOCK_SIZE, BLOCK_SIZE, CANVAS_WIDTH - 2 * BLOCK_SIZE, CANVAS_HEIGHT - 2 * BLOCK_SIZE);
};
