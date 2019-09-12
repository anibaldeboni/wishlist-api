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
  User.associate = function(models) {
    User.belongsToMany(models.Wish, {
      through: 'Wishlist',
      as: 'wishes',
      foreignKey: 'user_id',
    });
  };
  return User;
};
