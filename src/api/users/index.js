const { Router } = require('express');
const Remove = require('./remove');
const Detail = require('./details');
const Update = require('./update');
const requireAuth = require('../../middleware/requireAuth');

const router = new Router();

router.delete('/', requireAuth, Remove);

router.get('/', requireAuth, Detail);

router.put('/', requireAuth, Update);

module.exports = router;
