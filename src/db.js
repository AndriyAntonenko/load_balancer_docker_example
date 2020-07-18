const { Client } = require('pg');
const { config } = require('./config');

const pgClient = new Client({
  user: config.db.user,
  password: config.db.password,
  name: config.db.name,
  port: config.db.port,
  host: config.db.host
});

exports.pgClient = pgClient;
