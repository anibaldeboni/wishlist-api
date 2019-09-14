const { User } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  return User.findOne({
    where: { id },
    attributes: ['id', 'name', 'email'],
  })
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(500).send(error));
};
