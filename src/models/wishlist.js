'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    user_id: DataTypes.STRING,
    wish_id: DataTypes.STRING
  }, {});
  Wishlist.associate = function(models) {
    // associations can be defined here
  };
  return Wishlist;
};