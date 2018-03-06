module.exports = function (app) {
	return function () {
		const Sequelize = require('sequelize');
		const sequelize = new Sequelize('node_webapp', 'root', '', {
			host: 'localhost',
			dialect: 'mysql',
			operatorsAliases: false,
			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			},
		});
		return sequelize;
	}
};
