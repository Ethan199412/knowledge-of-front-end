const http = require('http')
const fs = require('fs')

// https://juejin.cn/post/6859939491994402824

http.createServer((req, res) => {
    const { url } = req
    if (url == '/') {
        const file = fs.readFileSync('./index.html').toString()
        res.end(file)
    }
}).listen(3000, () => {
    console.log('server start in 3000')
})

http.createServer((req, res) => {
    const { url } = req
    if (url == '/info') {
        console.log('[p1.0] info')
        res.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000']);
        // res.setHeader('set-cookie', [
        //     'token=123; domain=localhost;'
        // ])
        // 浏览器加了 withCredentials 服务端就必须配合加 access control allow credentials
        res.setHeader('Access-Control-Allow-Credentials', true);

        res.writeHead(200, {
            'Set-Cookie': 'token=123; domain=localhost; age=100; secure; SameSite=none'
        })
        const obj = {
            success: true
        }
        res.end(JSON.stringify(obj))
    }
    else if (url == '/checkCookie') {
        res.setHeader('Access-Control-Allow-Origin', ['http://localhost:3000']);
        res.setHeader('Access-Control-Allow-Credentials', true);

        const cookieStr = req.headers.cookie
        //res.setHeader('Access-Control-Allow-Credentials', true);
        console.log('[p1.1]', { cookieStr })
        const obj = {
            success: true
        }
        res.end(JSON.stringify(obj))
    }
}).listen(3001, () => {
    console.log('server start in 3001')
})