const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');

const { SALT_WORK_FACTOR } = process.env;


module.exports = (sequelize, DataTypes) => {
  const Password = sequelize.define('Password', {
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    hooks: {
      beforeCreate: (passwd) => {
        passwd.id = uuid();
        passwd.password = bcrypt.hashSync(passwd.password, bcrypt.genSaltSync(+SALT_WORK_FACTOR), null);
      },
    },
    instanceMethods: {
      validPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },


  });
  // Password.beforeCreate((passwd, _) => {

  //   passwd.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(+SALT_WORK_FACTOR), null);
  // });
  Password.associate = function (models) {
    Password.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'passwords',
    });
  };
  return Password;
};
