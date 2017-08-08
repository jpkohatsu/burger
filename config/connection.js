// Setup MySQL connection
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	// Heroku connection
	connection = mysql.createConnection(process.env.JAWS_URL);
}	else {
	// Database connection is local
	connection = mysql.createConnection({
		port: 3030,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	});
}

// Make connection
connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection;

