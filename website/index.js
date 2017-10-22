const http = require('http');
const fs = require('fs');
const url = require('url')
const Cleverbot = require('cleverbot');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const Botkit = require('botkit');
const slackController = Botkit.slackbot();
const db_handler = require('./../slackbot/db_handler');

const hostname = '127.0.0.1';
const port = 8000;

var clev = new Cleverbot({
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

var slackBot = slackController.spawn({
    token: 'xoxb-260082394741-6PASW8ptXm8aQuNA4UxNth74'
})

var watsonMiddleware = require('botkit-middleware-watson')({
    username: '1b5cb74d-8e46-4cf1-b4a2-77b6e09935b5',
    password: 'pTwMO8dqxJ6F',
    workspace_id: '23d21d22-7205-4d07-be1b-12137ea256fd',
    version_date: '2017-05-26',
    minimum_confidence: 0.50, // (Optional) Default is 0.75
});

slackController.middleware.receive.use(watsonMiddleware.receive);

var currentConvId;
db_handler.setConversation('TestBot', function(result) {
    currentConvId = result;
});

slackBot.startRTM();

slackController.hears(['.*'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    db_handler.setQuestion(message.text, currentConvId, function(questionId){
        if (message.watsonData.output.text[0] === 'ErrorMessage') {
            clev.query(message.text).then(function (response) {

                parameters.text = response.output;

                bot.reply(message, response.output);
                db_handler.setResponse(response.output, questionId, function(None){});

                natural_language_understanding.analyze(parameters, function(err, responseNlu) {

                    if (err)
                    {
                        //console.log('error:', err);

                        //res.setHeader('Content-Type', 'application/json');
                        //res.end(JSON.stringify({cleverbot: response.output, watson: null}));
                        console.log(err);
                        console.log(response.output);
                    }
                    else
                    {
                        //res.setHeader('Content-Type', 'application/json');
                        //res.end(JSON.stringify({cleverbot: response.output, watson: responseNlu}));
                        console.log(response.output);
                        console.log(responseNlu);
                    }
                });
            });
        } else {
            bot.reply(message, message.watsonData.output.text.join('\n'));
            db_handler.setResponse(message.watsonData.output.text, questionId, function(None){});

            parameters.text = message.watsonData.output.text[0];

            natural_language_understanding.analyze(parameters, function(err, responseNlu) {

                if (err)
                {
                    // res.setHeader('Content-Type', 'application/json');
                    // res.end(JSON.stringify({slackbot: message.watsonData.output.text, watson: null}));
                    console.log(err);
                    console.log(message.watsonData.output.text);
                    console.log(typeof(message.watsonData.output.text[0]));
                }
                else
                {
                    // res.setHeader('Content-Type', 'application/json');
                    // res.end(JSON.stringify({slackbot: message.watsonData.output.text, watson: responseNlu}));
                    console.log(message.watsonData.output.text);
                    console.log(responseNlu);
                }
            });
        }
    });
});

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    var path = url.parse(req.url, true);

    if (path.pathname == '/api')
    {
        var message = path.query.message;

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
