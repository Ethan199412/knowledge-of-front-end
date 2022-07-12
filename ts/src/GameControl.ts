import { DIRECTION_MAP, IDirection } from "./const";
import { Food } from "./food";
import { ScorePanel } from "./scorePanel";
import { Snake } from "./snake";
import { genPx } from "./utils";

export class GameControl {
  snake: Snake;

  panel: ScorePanel;

  food: Food;

  direction: string;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.panel = new ScorePanel(10, 2);

    this.init();
  }

  init() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    this.iter()
  }

  iter() {
    setTimeout(() => {
      if(this.snake.checkDead()) return
      this.run();
      const { X, Y } = this.snake;
      if (this.eatFood(X, Y)) {
        this.food.change()
        this.panel.addScore()
        this.snake.addBody()
      }
      this.iter()
      // if()
    }, this.panel.interval);
  }

  handleKeyDown(e: KeyboardEvent) {
    console.log(e.key, "this", this);
    // 如果是反的，不变换
    if(DIRECTION_MAP[e.key as keyof IDirection] == this.direction) return
    this.direction = e.key;
  }

  run() {
    let { X, Y } = this.snake;
    console.log({ X, Y, d: this.direction });
    switch (this.direction) {
      case "ArrowUp":
        this.snake.Y = Y - 10;
        break;
      case "ArrowDown":
        console.log({ Y });
        this.snake.Y = Y + 10;
        break;
      case "ArrowLeft":
        this.snake.X -= 10;
        break;
      case "ArrowRight":
        this.snake.X += 10;
        break;
    }

    // switch (this.direction) {
    //   case "ArrowUp":
    //     last.style.top = genPx(Y - 10);
    //     last.style.left = genPx(X)
    //     break;
    //   case "ArrowDown":
    //     console.log({ Y });
    //     last.style.top = genPx(Y + 10);
    //     last.style.left = genPx(X)
    //     break;
    //   case "ArrowLeft":
    //     last.style.left = genPx(X - 10);
    //     last.style.top = genPx(Y)
    //     break;
    //   case "ArrowRight":
    //     last.style.left = genPx(X + 10);
    //     last.style.top = genPx(Y)
    //     break;
    // }
  }

  eatFood(X: number, Y: number) {
    if (X == this.food.X && Y == this.food.Y) {
      return true;
    }
    return false;
  }
}
