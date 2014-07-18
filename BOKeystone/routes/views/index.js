var keystone = require('keystone');

exports = module.exports = function(req, res) {
	

	var view = new keystone.View(req, res),
		locals = res.locals;
	
	
	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder'));
	
	// Render the view
	view.render('index');
	
};
