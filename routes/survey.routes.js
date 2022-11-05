const mongoose = require('mongoose');
const requireCredits = require('./../middlewares/requireCredits');
const requireLogin = require('./../middlewares/requireLogin');
const Mailer = require('./../services/Mailer');
const surveyTemplate = require('./../services/emailTemplates/surveyTemplate');
const { Path } = require('path-parser');
const { URL } = require('url');
const Survey = mongoose.model('surveys');

module.exports = app => {
	app.get('/api/surveys', requireLogin, async (req, res) => {
		const surveys = await Survey.find({ _user: req.user.id }).select({
			recipients: false,
		});

		res.send(surveys);
	});

	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now(),
		});

		const mailer = new Mailer(survey, surveyTemplate(survey));

		try {
			await mailer.send();
			await survey.save();

			req.user.credits--;
			const user = await req.user.save();

			res.send(user);
		} catch (error) {
			res.status(422).send(error);
		}
	});

	app.post('/api/surveys/webhooks', (req, res) => {
		const path = new Path('/api/surveys/:surveyId/:choice');

		req.body
			.map(({ email, url }) => {
				const match = path.test(new URL(url).pathname);

				if (match) {
					return {
						email,
						surveyId: match.surveyId,
						choice: match.choice,
					};
				}
			})
			.filter(entry => {
				if (entry?.email && entry?.surveyId && entry?.choice) return true;
			})
			.filter(function ({ email, surveyId }) {
				const key = `${email}|${surveyId}`;

				if (!this[key]) {
					this[key] = true;
					return true;
				}
			}, Object.create(null))
			.forEach(({ surveyId, email, choice }) => {
				Survey.updateOne(
					{
						_id: surveyId,
						recipients: {
							$elemMatch: { email: email, hasRasponded: false },
						},
					},
					{
						$inc: { [choice]: 1 },
						$set: { 'recipients.$.hasRasponded': true },
						lastResponded: new Date(),
					}
				).exec();
			});

		res.send({});
	});

	app.get('/api/surveys/:surveyId/:choice', (req, res) => {
		res.send('Thanks for voting!');
	});
};
