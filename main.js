var mysql = require('mysql');
var readline = require('readline');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'HipHip',
  database : 'hackathon'
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getQuestion(id, callback) {

    connection.query('SELECT * from Question WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getResponse(id, callback) {

    connection.query('SELECT * from Response WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
                callback(rows);
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getConversation(id, callback) {

    connection.query('SELECT * from Conversation WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
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
            console.log('Inserted Question Succesfully.');
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
            console.log('Inserted Response Succesfully.');
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
            console.log('Inserted Conversatoin Record.');
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

main();
