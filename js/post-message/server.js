const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { url } = req
    if (/\.html$/.test(url) || url === '/') {
        let path = url === '/' ? './index.html' : '.' + url
        fs.readFile(path, function (err, data) {
            if (err) {
                res.end(err)
            }
            res.end(data.toString())
        })
    }
}).listen(3000, function () {
    console.log('server listen in 3000')
})