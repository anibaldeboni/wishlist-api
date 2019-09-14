const { User } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.user.dataValues;
  const { name, email } = req.body;
  if (!name && !email) { return res.status(400).send('You may inform at least one field to update'); }
  return User.update({
    name,
    email,
  }, {
    where: { id },
  })
    .then(() => res.status(201).send('User information updated'))
    .catch((error) => res.status(500).send(error));
};
