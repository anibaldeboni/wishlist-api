const { User } = require('../../models');
const { Password } = require('../../models');


module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  return User.create({
    name,
    email,
  }, { includes: [{ model: Password }] })
    .then((user) => {
      return Password.create({ user_id: user.id, password })
        .then(() => res.status(201).send(user))
        .catch((error) => res.status(500).send(error));
    })
    .catch((error) => {
      const { name: type } = error;
      if (type === 'SequelizeUniqueConstraintError') {
        res.status(422).send('User already registered');
      } else {
        res.status(500).send(error);
      }
    });
};
