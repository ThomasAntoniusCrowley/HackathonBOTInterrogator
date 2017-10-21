const http = require('http');
const fs = require('fs');
const url = require('url')
const rn = require('random-number');

const hostname = '127.0.0.1';
const port = 8000;


const server = http.createServer((req, res) => {

    res.statusCode = 200;

    var path = url.parse(req.url, true);

    if (path.pathname == '/api') 
    {
        res.setHeader('Content-Type', 'application/json');
        var output = {
            number: rn()
        };

        res.end(JSON.stringify(output));
    }
    else
    {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./pages/index.html', function read(err, data) {
            if (err) {
                throw err;
            }
            else {
                res.end(data.toString());
            }
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
