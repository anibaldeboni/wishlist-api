const db = require('../../models');

module.exports = async (req, res) => {
  const { id: userId } = req.user.dataValues;
  const query = 'select w."price", w."image", w."brand", w."title", w."reviewScore" from "Users" as u join "Wishlists" as wl on wl.user_id = u.id join "Wishes" as w on w.id = wl.wish_id where u.id = (:id)'
  return db.sequelize.query(query, {
    replacements: { id: userId },
    type: db.sequelize.QueryTypes.SELECT,
  })
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};
