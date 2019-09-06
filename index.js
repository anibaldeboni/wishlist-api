const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const { DB_HOST } = process.env;

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log('MongoDB is running');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/health-check', (req, res) => {
  res.sendStatus(200);
});

app.post('/signup', (req, res) => {
  res.sendStatus(501);
});

app.post('/auth', (req, res) => {
  res.sendStatus(501);
});

app.delete('/users/:id', (req, res) => {
  res.sendStatus(501);
});

app.get('/users/:id', (req, res) => {
  res.sendStatus(501);
});

app.put('/users/:id', (req, res) => {
  res.sendStatus(501);
});

app.post('/wishlist/:userid', (req, res) => {
  res.sendStatus(501);
});

app.get('/wishlist/:userid', (req, res) => {
  res.sendStatus(501);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
