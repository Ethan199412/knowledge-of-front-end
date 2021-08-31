class DataSource {
    constructor() {
        //this.receive()
    }
    #listeners = new Set()
    #comments = [
        {
            id: 1,
            text: '测试哈哈哈'
        }
    ]

    #blogPost = 'blog haha'

    getComments = () => {
        console.log('[p5] getComments')
        return this.#comments
    }

    listen = (type, callback) => {
        console.log('[p6] listen', type, callback)
        this.#listeners.add({ type, callback })
        document.addEventListener(type, callback)
    }

    removeListener = (currentType) => {
        for (let obj in this.#listeners) {
            const { type, callback } = obj
            if (currentType === type) {
                document.removeEventListener(type, callback)
            }
        }
    }

    send = (type, args) => {
        console.log('[p0] type', type, 'args', args)

        let e = new CustomEvent(type, {
            cancelable: false,
            detail: {
                type,
                data: args
            }
        })
        document.dispatchEvent(e)
    }

    handler = (type, data) => {
        switch (type) {
            case 'change':
                this.#comments.push(data)
                break
        }
    }

    add = (data) => {
        this.#comments.push(data)
        this.send('change')
    }

    getBlogPost = (id) => {
        return this.#blogPost
    }

    updateBlogPost = (s) => {
        this.#blogPost = s
        this.send('updateBlog')
    }
}

export default new DataSource()