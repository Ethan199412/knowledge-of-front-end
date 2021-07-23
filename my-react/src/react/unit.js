const COMMON_TYPE = new Set(['string','number'])
class Unit {
    constructor(element) {
        this.currentElement = element
    }
}

class ReactTextUnit extends Unit {
    constructor(element){
        super(element)
    }
    getMarkUp(rootId) {
        this._rootId = rootId
        let markUp = `<span data-reactid="${rootId}">${this.currentElement}</span>`
        return markUp
    }
}

export default function createReactUnit(element) {
    if (COMMON_TYPE.has(typeof element)) {
        console.log('[p0]')
        return new ReactTextUnit(element)
    }
}