const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const { url } = req
    if (url == '/') {
        const file = fs.readFileSync('./script-async-defer.html')
        res.end(file)
        return
    }
    if (/^\/public/.test(url)) {
        console.log('url', url)
        const file = fs.readFileSync('.' + url)
        res.end(file.toString())
        return
    }
}).listen(3001, () => {
    console.log('server start')
})