const express = require('express');
const consign = require('consign');

module.exports = function() {
	let app = express();
	app.set('port', 3000);
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	consign({cwd: 'app'})
		.include('infra')
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;	
}
