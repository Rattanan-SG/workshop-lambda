const User = require('../models/user');

exports.create = body => {
  const user = new User(body);
  return user.save();
};

exports.findAll = (where, fields, options) => User.find(where, fields, options).lean();

exports.findByPk = (id, fields, options) => User.findById(id, fields, options).lean();

exports.updateByPk = (id, body, options) => User.findByIdAndUpdate(id, body, options);

exports.deleteByPk = (id, options) => User.findByIdAndDelete(id, options);

exports.updateOne = (filter, body, options) => user.updateOne(filter, body, options);

exports.deleteOne = (filter, options) => user.deleteOne(filter, options);
