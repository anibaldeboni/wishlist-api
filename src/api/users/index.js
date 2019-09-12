const { Router } = require('express');
const Remove = require('./remove');
const Detail = require('./details');
const Update = require('./update');

const router = new Router();

router.delete('/:id', Remove);

router.get('/:id', Detail);

router.put('/:id', Update);

module.exports = router;
