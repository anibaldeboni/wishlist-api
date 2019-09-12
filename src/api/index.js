const express = require('express');

const { Router } = express;
const router = new Router();

const user = require('./users');
const wishlist = require('./wishlist');
const session = require('./session');

router.use('/users', user);
router.use('/wishlist', wishlist);
router.use('/session', session);

module.exports = router;
