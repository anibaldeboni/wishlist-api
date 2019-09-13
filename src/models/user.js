const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  }, {});
  User.beforeCreate((user, _) => {
    user.id = uuid();
  });
  User.associate = function(models) {
    User.belongsToMany(models.Wish, {
      through: 'Wishlist',
      as: 'wishes',
      foreignKey: 'user_id',
    });
    User.hasOne(models.Password, {
      foreignKey: 'user_id',
      as: 'passwords',
    });
  };
  return User;
};
