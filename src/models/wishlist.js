const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUIDV4,
      defaultValue: () => uuid(),
    },
    user_id: DataTypes.STRING,
    wish_id: DataTypes.STRING
  }, { });

  Wishlist.associate = function(models) {
    // associations can be defined here
  };
  return Wishlist;
};
