'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_data.init({
    user_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username:{
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_data',
    tableName: 'User_data',
    timestamps: false
  });
  return User_data;
};