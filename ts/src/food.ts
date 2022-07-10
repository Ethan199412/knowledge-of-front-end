const PX = 'px'

export class Food {
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')
    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    change() {
        const x = this.genRandom(), y = this.genRandom()
        this.element.style.top = this.genPx(x)
        this.element.style.left = this.genPx(y)
    }

    genRandom() {
        return Math.round(Math.random() * 29) * 10
    }

    genPx(val: number) {
        return val + 'px'
    }
}
