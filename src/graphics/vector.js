export class Vector2D {
  /** @private */
  x;

  /** @private */
  y;

  static createFrom(vector) {
    return new Vector2D(vector.getX(), vector.getY());
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  move(vector) {
    this.x += vector.getX();
    this.y += vector.getY();
  }

  moveTo(vector) {
    this.x = vector.getX();
    this.y = vector.getY();
  }

  equals(vector) {
    return this.getX() == vector.getX() && this.getY() == vector.getY();
  }

  multiplyByNumber(value) {
    const x = this.getX() * value;
    const y = this.getY() * value;

    return new Vector2D(x, y);
  }
}
