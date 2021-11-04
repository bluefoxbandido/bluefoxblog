var httpProxy = require('http-proxy');
let fs = require('fs');

httpProxy.createServer({
    target: {
        host: 'localhost',
        port: 8081
    },
    ssl: {
        key: fs.readFileSync('./cert/ca.key', 'utf-8'),
        cert: fs.readFileSync('./cert/ca.crt', 'utf-8')
    }
}).listen(8081)