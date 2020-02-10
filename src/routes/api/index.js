const express = require('express');
const User = require('./user');
const Role = require('./role');

const router = express.Router();
const apis = [User, Role];

router.use(apis);

module.exports = router;
