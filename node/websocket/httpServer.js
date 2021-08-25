const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const { url } = req
    switch (url) {
        case '/':
            console.log('host', req.headers.host)
            fs.readFile('./client.html', function (err, data) {
                if (err) {
                    res.end(err)
                    return
                }
                res.end(data)
            })
    }
}).listen(3004, '192.168.31.201', function () {
    console.log('server is running')
})