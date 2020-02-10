const asyncWrapper = require('../middleware/async-wrapper');
const { Role } = require('../services');

exports.createRole = asyncWrapper(async (req, res) => {
  const result = await Role.createRole(req.body);
  res.send(result);
});

exports.getRole = asyncWrapper(async (req, res) => {
  const result = await Role.getRole(req.query);
  res.send(result);
});

exports.updateOrCreateRole = asyncWrapper(async (req, res) => {
  const result = await Role.updateOrCreateRole(req.body);
  res.send(result);
});

exports.getRoleById = asyncWrapper(async (req, res) => {
  const result = await Role.getRoleById(req.params.id);
  res.send(result);
});

exports.updateRoleById = asyncWrapper(async (req, res) => {
  const result = await Role.updateRoleById(req.params.id, req.body);
  res.send(result);
});

exports.deleteRoleById = asyncWrapper(async (req, res) => {
  const result = await Role.deleteRoleById(req.params.id);
  res.send(result);
});
