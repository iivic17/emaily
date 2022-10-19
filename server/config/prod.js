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
};
