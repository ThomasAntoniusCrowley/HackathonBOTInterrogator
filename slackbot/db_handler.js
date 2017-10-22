var mysql = require('mysql');
var readline = require('readline');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '324569',
  database : 'hackathon'
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getQuestion(id, callback) {

    connection.query('SELECT * from Question WHERE id = ?', id, function(err, rows) {
          if (!err) {
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getAnalytics(id, callback) {

    connection.query('SELECT * from WatsonAnalytics WHERE id = ?', id, function(err, rows) {
          if (!err) {
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getResponse(id, callback) {

    connection.query('SELECT * from Response WHERE id = ?', id, function(err, rows) {
          if (!err) {
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getConversation(id, callback) {

    connection.query('SELECT * from Conversation WHERE id = ?', id, function(err, rows) {
          if (!err) {
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function setQuestion(content, convId, callback) {

    var values = {
        Content: content,
        ConversationId: convId
    }

    connection.query('INSERT INTO Question SET ?', values, function(error, response) {
        if (error) {
            console.log(error.message);
        } else {
            callback(response.insertId);
        }
    });
}

function setResponse(content, questionId, callback) {

    var values = {
        Content: content,
        QuestionId: questionId
    }

    connection.query('INSERT INTO Response SET ?', values, function(error, result) {
        if (error) {
            console.log(error.message);
        } else {
            callback(result.insertId);
        }
    });
}

function setConversation(name, callback) {

    var values = {
        Owner: name
    }

    connection.query('INSERT INTO Conversation SET ?', values, function(error, result) {
        if (error) {
            console.log(error.message);
        } else {
            callback(result.insertId);
        }
    });
}

function setConversation(jsonObj, responseId, callback) {

    var values = {
        Analytics: jsonObj,
        ResponseId: responseId
    }

    connection.query('INSERT INTO WatsonAnalytics SET ?', values, function(error, result) {
        if (error) {
            console.log(error.message);
        } else {
            callback(result.insertId);
        }
    });
}

function main() {

    rl.question("Who is this conversation with? ", function(response) {
        setConversation(response, function(currentConvId) {
            rl.question("What is your question? ", function(question) {
                setQuestion(question, currentConvId, function(returnId) {
                    console.log(returnId);
                });
            });
        });
    });
}

module.exports = {
    getConversation: getConversation,
    setConversation: setConversation,
    getQuestion: getQuestion,
    setQuestion: setQuestion,
    getResponse: getResponse,
    setResponse: setResponse,
    getWatsonAnalytics: getWatsonAnalytics,
    setWatsonAnalytics: setWatsonAnalytics
}
