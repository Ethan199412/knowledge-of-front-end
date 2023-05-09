const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { url } = req
    console.log('[p1.0] url', url)
    if (url == '/' || url == '/edu') {
        const file = fs.readFileSync('index.html')
        res.end(file.toString())
    }
}).listen(3000, () => {
    console.log('server 0 start')
})

http.createServer((req, res) => {
    const { url } = req
    console.log('[p1.1] url', url)
    if (url == '/' || url == '/vod') {
        const file = fs.readFileSync('index1.html')
        res.end(file.toString())
    }
    if (url == '/vod/data') {
        res.end(JSON.stringify({ data: 1 }))
    }
}).listen(3001, () => {
    console.log('server 1 start')
})