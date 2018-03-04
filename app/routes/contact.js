module.exports = function (app) {
	let controller = app.controllers.contact;

	app.get('/contacts', controller.getContactList);
	app.get('/contacts/:id', controller.getContact);
};

