import { Food } from "./food";
import { ScorePanel } from "./scorePanel";
import { Snake } from "./snake";

export class GameControl {
    snake: Snake

    panel: ScorePanel

    food: Food

    direction: string

    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.food = new Food()

        this.init()
    }

    init() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown(e: KeyboardEvent) {
        console.log(e.key)
        this.direction = e.key
    }
}