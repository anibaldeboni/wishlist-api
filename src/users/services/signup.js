require('dotenv').config();

const { DB_HOST } = process.env;

const { User, Password } = require('../models');

class SignUp {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  create() {
    const user = new User({ name: this.name, email: this.email });
    user.save();
  }
}

module.exports = SignUp;
