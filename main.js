var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'HipHip',
  database : 'hackathon'
});

connection.connect();

connection.query('SELECT * from Question', function(err, rows, fields) {
  if (!err)
    console.log('The Response is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
