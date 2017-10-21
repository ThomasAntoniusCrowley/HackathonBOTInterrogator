var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
    username: '1b5cb74d-8e46-4cf1-b4a2-77b6e09935b5',
    password: 'pTwMO8dqxJ6F',
    version: 'v1',
    version_date: '2017-05-26'
});

conversation.listWorkspaces(function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
});

function main() {
    conversation.listWorkspaces();
}

main();
