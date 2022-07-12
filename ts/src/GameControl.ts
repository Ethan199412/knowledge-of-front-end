import { Food } from "./food";
import { ScorePanel } from "./scorePanel";
import { Snake } from "./snake";

export class GameControl {
  snake: Snake;

  panel: ScorePanel;

  food: Food;

  direction: string;

  interval: number = 100;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.panel = new ScorePanel();

    this.init();
  }

  init() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    setInterval(() => {
      this.run();
      const { X, Y } = this.snake;
      if (this.eatFood(X, Y)) {
        this.food.change()
        this.panel.addScore()
        this.snake.addBody()
      }
      // if()
    }, this.interval);
  }

  handleKeyDown(e: KeyboardEvent) {
    console.log(e.key, "this", this);
    this.direction = e.key;
  }

  run() {
    let { X, Y } = this.snake;
    console.log({ X, Y, d: this.direction });
    switch (this.direction) {
      case "ArrowUp":
        if (Y - 10 >= 0) this.snake.Y = Y - 10;
        return;
      case "ArrowDown":
        console.log({ Y });
        if (Y + 10 <= 290) this.snake.Y = Y + 10;
        return;
      case "ArrowLeft":
        if (X - 10 >= 0) this.snake.X -= 10;
        return;
      case "ArrowRight":
        if (X + 10 <= 290) this.snake.X += 10;
        return;
    }
  }

  eatFood(X: number, Y: number) {
    if (X == this.food.X && Y == this.food.Y) {
      return true;
    }
    return false;
  }
}
