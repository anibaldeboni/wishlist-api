const { Router } = require('express');
const AddItem = require('./addItem');
const ListDetails = require('./listDetails');

const router = new Router();

router.post('/:userid', AddItem);

router.get('/:userid', ListDetails);

module.exports = router;
