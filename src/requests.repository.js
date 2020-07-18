const { pgClient } = require('./db');
const { config } = require('./config');

class RequestsRepository {
  create(address, url) {
    return pgClient.query(
      `
      INSERT INTO requests (ip, path, host, requested_at)
      VALUES ($1, $2, $3, $4)
      `,
      [address, url, config.app.serverHost, new Date().toDateString()]
    );
  }

  getAll() {
    return pgClient.query('SELECT * FROM requests ORDER BY id DESC LIMIT 25');
  }
}

exports.requestsRepository = new RequestsRepository();
