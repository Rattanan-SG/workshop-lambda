const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');
global.gConfig = config;
require('./config/database');

const route = require('./routes');
const errorMiddleware = require('./middleware/error-middleware');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(route);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.info('app listen on port 3000');
});

module.exports.handler = serverless(app);
