const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { url, params } = req
    console.log('[p0] url', url)
    if (url == '/') {
        const file = fs.readFileSync('test1.html')
        res.setHeader(
            'Set-Cookie', `myCookie=test; Expires=${new Date(new Date().getTime() + 60000)};HttpOnly `)
        res.end(file.toString())
    }
}).listen(3000, () => {
    console.log('server start')
})

http.createServer((req, res) => {
    const { url, params } = req
    console.log('[p1] url', url)

    // 注意只有 Secure; SameSite=None cookie 才能带上，否则带不上。
    if (url == '/') {
        const file = fs.readFileSync('test2.html')
        res.setHeader(
            'Set-Cookie', `test2=test2; Expires=${new Date(new Date().getTime() + 60000)};HttpOnly;Secure;SameSite=None`)
            // Secure;SameSite=None
        res.end(file.toString())
    }
    else if (url == '/cat') {
        console.log('[p3] cookie', req.headers.cookie)
        const { cookie } = req.headers
        if (cookie && cookie.includes('test2')) {
            res.end(JSON.stringify({ name: 'kitty', age: 10 }))
            return
        }
        res.end(JSON.stringify({ code: 401, msg: 'no token' }))
    }
}).listen(3001, () => {
    console.log('server start')
})