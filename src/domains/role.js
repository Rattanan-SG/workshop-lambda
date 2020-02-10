const Role = require('../models/role');

exports.create = body => {
  const role = new Role(body);
  return role.save();
};

exports.findAll = (where, fields, options) => Role.find(where, fields, options);

exports.findByPk = (id, fields, options) => Role.findById(id, fields, options);

exports.updateByPk = (id, body, options) => Role.findByIdAndUpdate(id, body, options);

exports.deleteByPk = (id, options) => Role.findByIdAndDelete(id, options);

exports.updateOne = (filter, body, options) => Role.updateOne(filter, body, options);

exports.deleteOne = (filter, options) => Role.deleteOne(filter, options);
