var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'HipHip',
  database : 'hackathon'
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

function setQuestion(id) {

    var values = {
        content: content,
        QuestionId: id
    }

    connection.query('INSERT INTO Response VALUES ?', values, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });
}

function setResponse(id, content) {

    var values = {
        content: content,
        QuestionId: id
    }

    connection.query('INSERT INTO Response VALUES ?', values, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('success');
        }
    });
}

connection.end();
