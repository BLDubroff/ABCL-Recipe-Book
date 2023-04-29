'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating_reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating_reviews.init({
    rating_reviews_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    recipe_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Rating_reviews',
    tableName: 'Rating_reviews',
    timestamps: false
  });
  return Rating_reviews;
};