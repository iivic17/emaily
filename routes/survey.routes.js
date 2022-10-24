const requireCredits = require('./../middlewares/requireCredits');
const requireLogin = require('./../middlewares/requireLogin');

module.exports = app => {
	app.post('/surveys', requireLogin, requireCredits, (req, res) => {});
};
