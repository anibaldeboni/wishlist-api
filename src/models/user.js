module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
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