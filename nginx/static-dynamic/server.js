const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { url } = req
    console.log('[p1.0] url', url)
    if (url == '/') {
        // const file = fs.readFileSync('index.html')
        res.end(JSON.stringify({ number: 1, type: 'cat' }))
    }
}).listen(3000, () => {
    console.log('server 0 start')
})

http.createServer((req, res) => {
    const { url } = req
    console.log('[p1.1] url', url)
    if (/^\/picture/.test(url)) {
        const file = fs.readFileSync('.' + url)
        res.end(file)
    }
}).listen(3001, () => {
    console.log('server 1 start')
})