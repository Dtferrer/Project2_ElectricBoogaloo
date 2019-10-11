module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    darkmode: DataTypes.BOOLEAN,
    intrate: DataTypes.BOOLEAN,
    lowmax: DataTypes.BOOLEAN
  });

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Account, {
      foreignkey: {
        allowNull: false
      },
      constraints: false
    });
  };

  return Purchase;
};
