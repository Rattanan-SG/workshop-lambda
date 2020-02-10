const express = require('express');
const { User } = require('../../controllers');

const router = express.Router();

router.post('/user', User.createUser);
router.get('/user', User.getUser);
router.get('/user/:id', User.getUserById);
router.patch('/user/:id', User.updateUserById);
router.delete('/user/:id', User.deleteUserById);

module.exports = router;
