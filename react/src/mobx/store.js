import { observable, action } from 'mobx'

class Store {
    @observable
    data = {
        a: 1,
        b: 2,
        c: 3
    }

    @observable
    list = [10, 11, 12]

    @action
    addOne = () => {
        setTimeout(() => {
            this.data.a += 1
            this.data.b += 1
            this.data.c += 1
            for (let i in this.list) {
                this.list[i] += 1
            }
        })
    }
}

export default new Store()