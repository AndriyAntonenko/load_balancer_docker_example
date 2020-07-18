const http = require('http');
const { pgClient } = require('./src/db');
const { config } = require('./src/config');
const { requestsRepository } = require('./src/requests.repository');

function runServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
    requestsRepository.create(req.socket.localAddress, req.url)
      .then(() => requestsRepository.getAll())
      .then((data) => {
        res.statusCode = 200;
        res.end(JSON.stringify(data.rows));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err.message);
      });
    });
    
    server.listen(config.app.port, config.app.host, () => {
      console.info(`Server listening ${config.app.host}:${config.app.port}`);
      resolve(server);
    });
  });
}

(async () => {
  await pgClient.connect();
  const server = await runServer();
  server.on('close', () => {
    pgClient.end()
      .finally(() => process.exit());
  });
})();
