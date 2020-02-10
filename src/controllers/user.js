const asyncWrapper = require('../middleware/async-wrapper');
const { User } = require('../services');

exports.createUser = asyncWrapper(async (req, res) => {
  const result = await User.createUser(req.body);
  res.send(result);
});

exports.getUser = asyncWrapper(async (req, res) => {
  const result = await User.getUser(req.query);
  res.send(result);
});

exports.getUserById = asyncWrapper(async (req, res) => {
  const result = await User.getUserById(req.params.id);
  res.send(result);
});

exports.updateUserById = asyncWrapper(async (req, res) => {
  const result = await User.updateUserById(req.params.id, req.body);
  res.send(result);
});

exports.deleteUserById = asyncWrapper(async (req, res) => {
  const result = await User.deleteUserById(req.params.id);
  res.send(result);
});
