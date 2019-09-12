const App = require('./src/server');

require('dotenv').config();

const { SERVER_PORT } = process.env;

App.start(SERVER_PORT);

process.on('SIGINT', () => {
  App.stop();
});
