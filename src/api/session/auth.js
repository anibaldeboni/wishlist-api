require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const { SECRET_KEY } = process.env;

module.exports = async (req, res) => {
  const { email, password } = req.body;
  return User.findOne({
    where: { email },
    attributes: ['id', 'email'],
    include: 'passwords',
  })
    .then((user) => {
      if (!user) {
        return res.status(401).send('Authentication failed');
      }
      const { password: hash } = user.passwords;
      if (bcrypt.compareSync(password, hash)) {
        const token = jwt.sign({ sub: user.id }, SECRET_KEY, {
          expiresIn: '2 days',
        });
        return res.status(201).json({
          success: true,
          message: 'Authentication successfull',
          token,
        });
      }
      return res.sendStatus(401);
    })
    .catch((error) => res.status(500).send(error));
};
