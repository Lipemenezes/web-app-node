module.exports = function () {
	return function () {
		let mysql = require('mysql');
		let connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'node_webapp'
		});
		return connection;
	};
};
