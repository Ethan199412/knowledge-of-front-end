const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const { url } = req
    let file
    switch (url) {
        case '/':
            file = fs.readFileSync('./index.html')
            res.end(file.toString())
            break
    }
}).listen(3001, () => {
    console.log('server start')
})