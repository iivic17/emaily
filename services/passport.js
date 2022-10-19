const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('./../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => done(null, user));
});

passport.use(
	new GoogleStrategy(
		{
			proxy: true,
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({
				googleId: profile.id,
			}).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				}
				if (!existingUser) {
					new User({
						googleId: profile.id,
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			proxy: true,
			clientID: keys.facebook.appID,
			clientSecret: keys.facebook.appSecret,
			callbackURL: '/auth/facebook/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({
				facebookId: profile.id,
			}).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				}
				if (!existingUser) {
					new User({
						facebookId: profile.id,
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
