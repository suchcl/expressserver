const http = require('http')
const fs = require('fs')
const httpPort = 3002

http
    .createServer((req, res) => {
        fs.readFile('./views/index.html', 'utf-8', (err, content) => {
            console.log('%c [ content ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', content)
            if (err) {
                console.log('We cannot open "index.html" file.')
            }

            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
            })

            res.end(content)
        })
    })
    .listen(httpPort, () => {
        console.log('Server listening on: http://localhost:%s', httpPort)
    })