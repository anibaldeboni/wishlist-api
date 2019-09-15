const { Wish, Wishlist } = require('../../models');
const magalu = require('../../services/magalu');

function addToWishlist(res, userId, wishId) {

}

module.exports = async (req, res) => {
  const { id: userId } = req.user.dataValues;
  const { itemId } = req.body;
  return Wishlist.findOne({ where: { user_id: userId, wish_id: itemId } })
    .then((wishes) => {
      if (wishes) { return res.status(400).send('Item already in wishlist'); }
      return magalu.getItem(itemId)
        .then(({ data }) => {
          const {
            reviewScore,
            title,
            price,
            brand,
            image,
          } = data;
          Wish.findOne({ where: { id: itemId }, attributes: ['id'] })
            .then((wish) => {
              if (!wish) {
                Wish.create({
                  id: itemId,
                  reviewScore,
                  title,
                  price,
                  brand,
                  image,
                })
                  .then((created) => Wishlist.create({ user_id: userId, wish_id: created.id })
                    .then(() => res.status(201).send('Item added to wish list'))
                    .catch((error) => {
                      res.status(500).send(error);
                    }))
                  .catch((error) => res.status(500).send(error));
              } else {
                return Wishlist.create({ user_id: userId, wish_id: wish.id })
                  .then(() => res.status(201).send('Item added to wish list'))
                  .catch((error) => {
                    res.status(500).send(error);
                  });
              }
            })
            .catch((error) => res.status(500).send(error));
        })
        .catch(({ response: { status } }) => res.sendStatus(status));
    });
};
