export class Canvas {
  /** @private */
  canvas;

  constructor(className, width, height) {
    this.canvas = this.findCanvas(className);

    this.canvas.width = width;
    this.canvas.height = height;
  }

  getContext() {
    return this.canvas.getContext("2d");
  }

  /**
   * @private
   * @throws {Error} if canvas is not found
   */
  findCanvas(className) {
    const canvas = document.querySelector(`.${className}`);

    if(!canvas) {
      throw new Error("Canvas not found!");
    }

    return canvas;
  }
}
