const router = require('express').Router();
const passport = require('passport');

//Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//Auth logout
router.get('/logout', (req, res) => {
    res.send('User logout');
});

//Auth with google
router.get('/google',  passport.authenticate('google', {
    scope: ['profile']
}));

//Google auth redirect url 
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.send('Call back from google API!');
});


module.exports = router;