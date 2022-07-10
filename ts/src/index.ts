import './index.less'
import { Food } from "./food";
import { ScorePanel } from "./scorePanel";
import { GameControl } from './GameControl';

const food = new Food()
const panel = new ScorePanel()

setInterval(() => {
    food.change()
    panel.addScore()
}, 1000)

const gameControl = new GameControl()