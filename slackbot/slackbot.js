var Botkit = require('botkit');
var slackController = Botkit.slackbot();
var db_handler = require('./db_handler');

var slackBot = slackController.spawn({
    token: '<slack_token>'
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
db_handler.setConversation('TetsBot', function(result) { 
    currentConvId = result;
});

slackBot.startRTM();

slackController.hears(['.*'], ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
    db_handler.setQuestion(message.text, currentConvId, function(questionId){
        if (message.watsonError) {
            bot.reply(message, "I'm sorry, but for technical reasons I can't respond to your message");
            bot.reply(message, message.watsonError);
            console.log(message.watsonError)
        } else {
            bot.reply(message, message.watsonData.output.text.join('\n'));
            db_handler.setResponse(message.watsonData.output.text, questionId, function(None){});
        }
    });
    
});
