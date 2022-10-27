module.exports = {
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	},
	mongo: {
		URI: process.env.MONGO_URI,
	},
	cookie: {
		key: process.env.COOKIE_KEY,
	},
	facebook: {
		appID: process.env.FACEBOOK_APP_ID,
		appSecret: process.env.FACEBOOK_APP_SECRET,
	},
	port: process.env.PORT,
	redirectDomain: process.env.REDIRECT_DOMAIN,
	stripe: {
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
		secretKey: process.env.STRIPE_SECRET_KEY,
	},
	sendgrid: {
		apiKey: process.env.SENDGRID_API_KEY,
	},
};
