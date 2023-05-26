import { genPx } from "./utils";

export class Snake {
  head: HTMLElement;

  bodies: HTMLCollection;

  element: HTMLElement;

  private isDead: boolean

  constructor() {
    this.element = document.getElementById("snake");
    this.head = document.querySelector("#snake > div");
    this.bodies = this.element.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    console.log("[p0] head", this.head.style.left);
    if (value <= 290 && value >= 0) {
      this.moveBody()
      this.head.style.left = genPx(value);
      this.checkBumbIntoBody()
      return
    }
    this.isDead = true
  }

  set Y(value: number) {
    console.log("[p1] head", this.head.style.top);
    if (value <= 290 && value >= 0) {
      this.moveBody()
      this.head.style.top = genPx(value);
      this.checkBumbIntoBody()
      return
    }
    this.isDead = true
  }

  checkMeetSecondPartOfBody(X?: number, Y?: number) {
    if (this.bodies.length < 2) return false

    const second = this.bodies[1] as HTMLElement
    if (X && second.offsetLeft == X) {
      return true
    }
    if (Y && second.offsetTop == Y) {
      return true
    }

    return false
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
    console.log("[p2]", this.bodies);

    let last = this.bodies[this.bodies.length - 1] as HTMLElement, lastPrev = this.bodies[this.bodies.length - 2] as HTMLElement
    last.style.top = genPx(lastPrev.offsetTop)
    last.style.left = genPx(lastPrev.offsetLeft)

    // for (let i = 1; i < this.bodies.length; i++) {
    //   let body = this.bodies[i] as HTMLElement;
    //   let prevBody = this.bodies[i - 1] as HTMLElement;
    //   console.log("[p2.1]", { body });
    //   body.style.left = genPx(prevBody.offsetLeft);
    //   body.style.top = genPx(prevBody.offsetTop);
    // }
  }

  checkDead() {
    if (this.isDead) {
      alert('蛇死了')
      return true
    }
  }

  checkBumbIntoBody() {
    const { X, Y } = this
    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i]
      const { offsetLeft, offsetTop } = body as HTMLElement
      if (X == offsetLeft && Y == offsetTop) {
        this.isDead = true
      }
    }
  }

  moveBody() {
    const { length } = this.bodies
    if (length > 1) {
      for (let i = this.bodies.length - 1; i > 0; i--) {
        let body = this.bodies[i] as HTMLElement, prevBody = this.bodies[i - 1] as HTMLElement
        console.log('[p0.1]', { pTop: prevBody.offsetTop, pLeft: prevBody.offsetLeft, bTop: body.offsetTop, bLeft: body.offsetLeft })
        body.style.left = genPx(prevBody.offsetLeft)
        body.style.top = genPx(prevBody.offsetTop)
      }
    }
  }
}
