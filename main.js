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

connection.connect();

function getQuestion(id) {

    connection.query('SELECT * from Question WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
                return rows;
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getResponse(id) {

    connection.query('SELECT * from Response WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
                return rows;
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function getConversation(id) {

    connection.query('SELECT * from Conversation WHERE id = ?', id, function(err, rows) {
          if (!err) {
                console.log('The Response is: ', rows);
                return rows;
          } else {
                console.log('Error while performing Query.');
                throw(err);
          }});
}

function setQuestion(content, convId) {

    var values = {
        Content: content,
        ConversationId: convId
    }

    connection.query('INSERT INTO Response VALUES ?', values, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });
}

function setResponse(content, questionId) {

    var values = {
        Content: content,
        QuestionId: questionId
    }

    connection.query('INSERT INTO Response VALUES ?', values, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });
}

function setConversation(id, name) {

    var values = {
        owner: name
    }

    connection.query('INSERT INTO Response VALUES ?', values, function(error, result) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
            return result.Id;
        }
    });
}

function main() {

    rl.question("Who is this conversation with?", function(reponse) {
        var currentConvId = setConversation(response);
    });

    rl.question("What is your question?", function(question) {
        setQuestion(question, currentId);
    });
}

connection.end();
main();
