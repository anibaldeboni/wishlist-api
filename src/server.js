const express = require('express');
const bodyParser = require('body-parser');
const { name, version } = require('../package.json');
// const helmet = require('helmet');
const app = express();
const api = require('./api');

app.use(bodyParser.json());
app.use(api);

app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (req, res) => res.sendStatus(200));

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.info(`${name} (${version}) running on port ${port}`);
    });
    return app;
  },
  stop() {
    server.close();
    console.info(`${name} (${version}) stopped`);
  },
};
