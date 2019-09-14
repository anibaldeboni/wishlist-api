const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportMiddleware = require('./middleware/passport');
const { name, version } = require('../package.json');

const app = express();
const api = require('./api');

app.use(bodyParser.json());
app.use(passport.initialize());
passportMiddleware(passport);

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
