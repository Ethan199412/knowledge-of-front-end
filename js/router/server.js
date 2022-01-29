const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const { url } = req
    let file, path
    console.log('[p0]', { url })
    switch (url) {
        case '/':
            file = fs.readFileSync('./history-router.html')
            res.end(file.toString())
            return
    }
    res.end('404')
}).listen(3000, () => {
    console.log('server running in 3000')
})