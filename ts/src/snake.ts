import { genPx } from "./utils";

export class Snake {
  head: HTMLElement;

  bodies: HTMLCollection;

  element: HTMLElement;

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
    this.head.style.left = genPx(value);
  }

  set Y(value: number) {
    console.log("[p1] head", this.head.style.top);
    this.head.style.top = genPx(value);
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
    console.log("[p2]", this.bodies);

    for (let i = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement;
      let prevBody = this.bodies[i - 1] as HTMLElement;
      console.log("[p2.1]", { body });
      body.style.left = genPx(prevBody.offsetLeft);
      body.style.top = genPx(prevBody.offsetTop);
    }
  }
}
