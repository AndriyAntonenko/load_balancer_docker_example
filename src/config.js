const os = require('os');
const dotenv = require('dotenv');

dotenv.config();

exports.config = {
  db: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST
  },
  app: {
    port: 3000,
    host: '0.0.0.0',
    serverHost: os.hostname()
  }
};
