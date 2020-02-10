const { Role } = require('../domains');

exports.createRole = body => Role.create(body);

exports.getRole = query => {
  const { fields, ...where } = query;
  return Role.findAll(where, fields);
};

exports.updateOrCreateRole = body => Role.updateOne({ name: body.name }, body, { upsert: true });

exports.getRoleById = id => Role.findByPk(id);

exports.updateRoleById = (id, body) => Role.updateByPk(id, body, { new: true });

exports.deleteRoleById = id => Role.deleteByPk(id);
