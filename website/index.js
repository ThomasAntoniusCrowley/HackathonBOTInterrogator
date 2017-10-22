const http = require('http');
const fs = require('fs');
const url = require('url')
const Cleverbot = require('cleverbot');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const hostname = '127.0.0.1';
const port = 8000;

let clev = new Cleverbot({
      key: 'CC520l1ZK6O1QROHPmTHO1JWtQw' // Can be obtained at http://cleverbot.com/api 
});

var parameters = {

    'features': 
    {
        'categories': {},
        'concepts': {},
        'emotion': {},
        'entities': 
        {
            'emotion': true,
            'sentiment': true,
            //'limit': 2
        },
        'keywords': 
        {
            'emotion': true,
            'sentiment': true,
            //'limit': 2
        },
        'sentiment': {},
        'relations': {},
        'semantic_roles': {
            'entities': true,
            'keywords': true,
        }
    }
}

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': '911c9986-82b1-41d8-a1c1-4a76d0b00cbb',
    'password': '7ijwXmKEIXSw',
    'version_date': '2017-02-27'
});

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    var path = url.parse(req.url, true);

    if (path.pathname == '/api') 
    {
        var message = path.query.message;

        clev.query(message).then(function (response) { 

            parameters.text = response.output;

            natural_language_understanding.analyze(parameters, function(err, responseNlu) {

                if (err)
                {
                    //console.log('error:', err);

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({cleverbot: response.output, watson: null}));
                }
                else
                {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({cleverbot: response.output, watson: responseNlu}));
                }
            });

        });
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
