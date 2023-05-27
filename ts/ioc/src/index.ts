import { A as A1 } from './compare'

/**
 * 使用控制反转以后，如果 A 和 B 有变化，直接修改
 * 容器即可，而不必去修改外层的类。
 */
class A {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class B {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Container {
    mo: any
    constructor() {
        this.mo = {}
    }

    provide(key: string, mo: any) {
        this.mo[key] = mo
    }

    get(key: string) {
        return this.mo[key]
    }
}

const mo = new Container()
mo.provide('a', new A('哈哈'))
mo.provide('b', new B('嘿嘿'))
mo.provide('a2', new A('哈哈2'))

class C {
    a: A
    b: B
    constructor(mo: Container) {
        this.a = mo.get('a')
        this.b = mo.get('b')
    }
}

class D {
    a: A
    b: B
    constructor(mo: Container) {
        this.a = mo.get('a')
        this.b = mo.get('b')
    }
}

const c = new C(mo)