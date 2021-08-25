const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 3003 })

/** 原生 nodeJS 不包括 web socket
 * 你需要自己下载
 */
server.on('connection', function (ws, req) {
    const { remotePort: port, remoteAddress: ip } = req.connection
    const clientName = ip + port
    console.log('%s is connected', clientName)

    ws.send("welcome " + clientName)

    ws.on('message', function (message) {
        console.log('receive %s from %s', message, clientName)
        server.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(clientName + ' -> ' + message)
            }
        })
    })
})