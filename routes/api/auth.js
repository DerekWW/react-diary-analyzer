const express = require('express')
const knex = require('../../knex')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy
const router = express.Router()

passport.use(new GoogleStrategy({
  consumerKey: process.env.GOOGLE_CONSUMER_KEY,
  consumerSecret: process.env.GOOGLE_CONSUMER_SECRET,
  callbackURL: '/api/home'
}, (token, tokenSecret, profile, done) => {
  //knex query here for user
}))


router.get('/google',
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' })
 )

router.get('/google/callback',
passport.authenticate('google', { failureRedirect: '/asdf' }),
  function(req, res) {
    res.redirect('/');
  }
);

module.exports = router
