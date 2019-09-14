const { Router } = require('express');
const AddItem = require('./addItem');
const ListDetails = require('./listDetails');
const requireAuth = require('../../middleware/requireAuth');

const router = new Router();

router.post('/', requireAuth, AddItem);

router.get('/', requireAuth, ListDetails);

module.exports = router;
