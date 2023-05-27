class A {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

// 当 A 的 constuctor 有改动的时候，B 和 C 都需要做相应的调整
class B {
    a: A
    constructor() {
        this.a = new A('cat')
    }
}



class C {
    a: A
    constructor() {
        this.a = new A('dog')
    }
}

export {
    A,
    B,
    C
}