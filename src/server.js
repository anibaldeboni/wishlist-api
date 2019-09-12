const express = require('express');
const bodyParser = require('body-parser');
const { name, version } = require('../package.json');

// const morgan = require('morgan');
// const clientSession = require('client-sessions');
// const helmet = require('helmet');

// const {SESSION_SECRET} = require('./config');

const app = express();
const api = require('./api');

app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (req, res) => res.sendStatus(200));

// app.use(morgan('short'));
app.use(bodyParser.json());
// app.use(
//   clientSession({
//     cookieName: 'session',
//     secret: SESSION_SECRET,
//     duration: 24 * 60 * 60 * 1000
//   })
// );
// app.use(helmet());

app.use(api);

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
