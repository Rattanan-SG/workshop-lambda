const { User } = require('../domains');

exports.createUser = body => User.create(body);

exports.getUser = query => {
  const { fields, ...where } = query;
  return User.findAll(where, fields);
};

exports.getUserById = id => User.findByPk(id);

exports.updateUserById = (id, body) => User.updateByPk(id, body, { new: true });

exports.deleteUserById = id => User.deleteByPk(id);
