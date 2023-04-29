'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session_cookies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Session_cookies.init({
    cookie_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    session_token:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Session_cookies',
    tableName: 'Session_cookies',
    timestamps: true,
    createdAt: false,
    updatedAt: true
  });
  return Session_cookies;
};