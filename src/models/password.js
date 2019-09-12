'use strict';
module.exports = (sequelize, DataTypes) => {
  const Password = sequelize.define('Password', {
    id: {
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  Password.associate = function(models) {
    Password.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'passwords',
    });
  };
  return Password;
};
