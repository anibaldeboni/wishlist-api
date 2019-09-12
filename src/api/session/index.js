const { Router } = require('express');
const SignUp = require('./signup');
const Auth = require('./auth');

const router = new Router();

router.post('/signup', SignUp);

router.post('/auth', Auth);

module.exports = router;
