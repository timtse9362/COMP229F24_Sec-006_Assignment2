var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

router.get('/', usersController.list);
router.post('/', usersController.create);
router.get('/:userID', usersController.userGet, usersController.userByID);
router.put('/:userID', usersController.update);
router.delete('/:userID', usersController.remove);

module.exports = router;
