require("dotenv").config();

const { env } = process;
const state = env.NODE_ENV || "development";

const config = {
  development: {
    config_id: "development",
    mongo_url: env.MONGO_URL || "mongodb://mongodb/test",
  },
  testing: {
    config_id: "testing",
    mongo_url: env.MONGO_URL || "mongodb://mongodb/test",
  },
  staging: {
    config_id: "staging",
    mongo_url: env.MONGO_URL,
  },
  production: {
    config_id: "production",
    mongo_url: env.MONGO_URL,
  }
};

module.exports = config[state];
