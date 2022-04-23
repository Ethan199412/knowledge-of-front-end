let http = require('http')
let url  = require('url');

// 发送 http://localhost:3000/?keyword="><script>alert('XSS');</script>&redirect=javascript:alert('ass')
// react 可以防止 xss 的发生，因为渲染前都被转换成字符串。
let app = http.createServer(function (request, response) {
    let reqUrl = request.url
    let urlObj = url.parse(reqUrl, true)
    let queryObj = urlObj.query
    
    function getParameter(key) {
        return queryObj[key] || ''
    }
    
    // 服务端渲染
    // html模板
    var str = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>XSS</title>
            </head>
            <body>
	            <input id="val" type="text" value="<%= getParameter("keyword") %>">
	            <button>搜索</button>
	            <div>
	                <a href="<%= getParameter("redirect") %>">点击链接</a>
	            </div>
            </body>
        </html>
        `

    let htmlstr = str.replace(/<%=(.+)%>/g, (_, $1) => {
        let a = eval($1)
        return a
    })

    // response.writeHead(200)
    response.end(htmlstr)
    // response.end()
})

app.listen(3000, function() {
    console.log('3000 running')
})
