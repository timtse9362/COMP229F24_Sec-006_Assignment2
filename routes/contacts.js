var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:userID', contactsController.userGet, contactsController.userByID);
router.put('/:userID', contactsController.update);
router.delete('/:userID', contactsController.remove);

module.exports = router;
