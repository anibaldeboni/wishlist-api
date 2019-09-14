const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Wish = sequelize.define('Wish', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUIDV4,
      unique: true,
    },
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    reviewScore: DataTypes.DOUBLE
  }, {});
  Wish.associate = function(models) {
    Wish.belongsToMany(models.User, {
      through: 'Wishlist',
      as: 'users',
      foreignKey: 'wish_id',
    });
  };
  return Wish;
};
