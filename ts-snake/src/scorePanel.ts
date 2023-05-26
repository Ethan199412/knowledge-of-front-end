export class ScorePanel {
  private score = 0;

  private level = 1;

  scoreEle: HTMLElement;

  levelEle: HTMLElement;

  private maxLevel: number;

  private updateLevel: number;

  interval: number = 150

  constructor(maxLevel: number = 10, updateLevel: number = 10) {
    this.scoreEle = document.getElementById("score");
    this.levelEle = document.getElementById("level");
    this.maxLevel = maxLevel;
    this.updateLevel = updateLevel;
  }

  addScore() {
    this.score++;
    console.log("[p0.1] score", this.score);
    this.scoreEle.innerHTML = this.score + "";

    if (this.score % this.updateLevel == 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < 10) {
      this.level++;
      this.levelEle.innerHTML = this.level + "";
      this.interval -= 10
    }
  }
}
