import { BORDER_COLLISION, FOOD_COLLISION, NO_COLLISION, SELF_COLLISION } from "../constants/game";
import { BLOCK_SIZE } from "../constants/window";

export const checkCollision = (ctx, snake, food) => {
  const snakeHeadPosition = snake.getHeadPosition();

  if(sideBordersCollided(ctx, snakeHeadPosition) || topOrBottomBordersCollided(ctx, snakeHeadPosition)) {
    return BORDER_COLLISION;
  }

  if(selfCollided(snake)) {
    return SELF_COLLISION;
  }

  if(foodCollided(snake, food)) {
    return FOOD_COLLISION;
  }

  return NO_COLLISION;
};

// FIXME: duplicates?
const sideBordersCollided = (ctx, position) => {
  return position.getX() <= BLOCK_SIZE
      || position.getX() + BLOCK_SIZE >= ctx.canvas.width - BLOCK_SIZE;
};

const topOrBottomBordersCollided = (ctx, position) => {
  return position.getY() <= BLOCK_SIZE
      || position.getY() + BLOCK_SIZE >= ctx.canvas.height - BLOCK_SIZE;
};

const foodCollided = (snake, food) => {
  return snake.getHeadPosition().equals(food.getPosition());
};

export const selfCollided = (snake) => {
  const position = snake.getPosition();

  for(let i = 0; i < position.length; i++) {
    for(let j = 0; j < position.length; j++) {
      if(i === j) {
        continue;
      }

      if(position[i].getX() === position[j].getX() && position[i].getY() === position[j].getY()) {
        return true;
      }
    }
  }

  return false;
};
