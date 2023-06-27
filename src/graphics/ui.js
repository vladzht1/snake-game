export class Score {
  /** @private */
  uiElement;

  /** @private */
  score;

  constructor(className) {
    this.uiElement = this.findUIElement(className);
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  increaseScore(score) {
    this.score += score;
    this.updateUI();
  }

  updateUI() {
    this.uiElement.innerText = this.getScore();
  }

  /** @private */
  findUIElement(className) {
    const element = document.querySelector(`.${className}`);

    if(!element) {
      throw new Error("UI score element not found!");
    }

    return element;
  }
}

export const showScore = () => {
  document.querySelector(".ui__score").classList.remove("disabled");
};

export const hideScore = () => {
  document.querySelector(".ui__score").classList.add("disabled");
};

export const showStartScreen = () => {
  document.querySelector(".ui__play-screen").classList.remove("disabled");
};

export const hideStartScreen = () => {
  document.querySelector(".ui__play-screen").classList.add("disabled");
};

export const showGameOverScreen = (score) => {
  document.querySelector(".ui__game-over").classList.remove("disabled");
  document.querySelector(".ui__game-over__score").innerHTML = score;
};

export const hideGameOverScreen = () => {
  document.querySelector(".ui__game-over").classList.add("disabled");
};
