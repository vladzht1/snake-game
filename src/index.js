import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants/window";
import { Canvas } from "./entities/canvas";
import { Game } from "./game";
import { hideGameOverScreen, hideStartScreen, showScore } from "./graphics/ui";

const startButton = document.querySelector(".ui__play-screen__button");
const restartButton = document.querySelector(".ui__game-over__button");

const ctx = new Canvas("canvas", CANVAS_WIDTH, CANVAS_HEIGHT).getContext();

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

function startGame() {
  hideStartScreen();
  hideGameOverScreen();
  showScore();

  new Game(ctx).start();
}
