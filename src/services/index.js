const subscription = require("../domains/subscription");
const { logInfo } = require("../utils/logger");

exports.subscribe = body => subscription.create(body);

exports.getSubscription = query => {
  const { fields, ...where } = query;
  return subscription.findAll(where, fields);
};

exports.updateOrCreateSubscription = body =>
  subscription.updateOne({ endpoint: body.endpoint }, body, { upsert: true });

exports.unsubscribe = endpoint => subscription.deleteOne({ endpoint });

exports.getSubscriptionThatUidisNull = () =>
  subscription.findAll({ uid: null });

exports.getSubscriptionById = id => subscription.findByPk(id);

exports.renewSubscription = (oldSubscription, newSubscription) =>
  subscription.updateOne(
    { endpoint: oldSubscription.endpoint },
    newSubscription
  );

exports.updateSubscriptionById = (id, body) =>
  subscription.updateByPk(id, body, { new: true });

exports.unsubscribeById = id => subscription.deleteByPk(id);
