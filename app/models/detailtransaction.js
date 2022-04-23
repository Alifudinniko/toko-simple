'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DetailTransaction.init({
    user: DataTypes.INTEGER,
    transaction: DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    nameItem: DataTypes.STRING,
    priceItem: DataTypes.STRING,
    imageItem: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailTransaction',
  });
  return DetailTransaction;
};