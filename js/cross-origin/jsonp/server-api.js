const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const { url } = req
    if (/^\/pay/.test(url)) {
        const data = { name: 'Ethan', age: 20, money: 10 }
        res.end('callback(' + JSON.stringify({ data, code: 200 }) + ')')
    }
}).listen(3002, () => {
    console.log('server start')
})