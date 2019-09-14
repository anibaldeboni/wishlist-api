require('dotenv').config();
const { Strategy, ExtractJwt } = require('passport-jwt');

const { SECRET_KEY } = process.env;
const { User } = require('../models');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

module.exports = (passport) => passport.use(new Strategy(jwtOptions, (payload, done) => {
  const { sub: id } = payload;

  User.findOne({
    where: { id },
    attributes: ['id', 'name', 'email'],
  })
    .then((user) => {
      if (user) {
        return done(null, user);
      }

      return done('User not found.', null);
    })
    .catch((error) => done(error, false));
}));
