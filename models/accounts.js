module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    total: DataTypes.INTEGER,
    checking: DataTypes.INTEGER,
    savings: DataTypes.INTEGER
  });

  return Account;
};
