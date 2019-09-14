const { User, Password } = require('../../models');

module.exports = async (req, res) => {
  // const { id } = req.params;
  const { id } = req.user.dataValues;
  return User.destroy({
    where: { id },
  })
    .then(() => {
      Password.destroy({
        where: { user_id: id },
      })
        .then(() => res.status(200).send('User successfully deleted'))
        .catch((error) => res.status(500).send(error));
    })
    .catch((error) => res.status(500).send(error));
};
