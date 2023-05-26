/**
 * 本例模拟了 nestjs 的实现
 */

import axios from 'axios'

const Get = (url: string) => {
    return (target: any, key: string, descriptor: any) => {
        const func = descriptor.value
        axios.get(url).then(res => {
            func(res, {
                status: 200,
                success: true
            })
        }).catch(e => {
            func(e, {
                status: 500,
                success: false
            })
        })
    }
}

class Controller {
    constructor() {

    }

    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(res: any, statusObj: any) {
        console.log('[p0]', { res: res.data.result.list, statusObj })
    }
}