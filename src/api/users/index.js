const { Router } = require('express');
const Remove = require('./remove');
const Detail = require('./details');
const Update = require('./update');
const requireAuth = require('../../middleware/requireAuth');

const router = new Router();

router.delete('/:id', requireAuth, Remove);

router.get('/:id', requireAuth, Detail);

router.put('/:id', requireAuth, Update);

module.exports = router;
