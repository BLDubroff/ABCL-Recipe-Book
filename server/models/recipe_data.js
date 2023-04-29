'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe_data.init({
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title:{
        type:  DataTypes.TEXT,
        allowNull: false
    },
    pic:{
        type:  DataTypes.TEXT,
        allowNull: true
    },
    description:{
        type:  DataTypes.TEXT,
        allowNull: false
    },
    recipe_content:{
        type:  DataTypes.TEXT,
        allowNull: false
    },
    prep_time_in_minutes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cook_time_in_minutes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_time_in_minutes:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servings:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    breakfast:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    lunch:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    dinner:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    snack:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    dessert:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    avg_rating:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Recipe_data',
    tableName: 'Recipe_data',
    timestamps: false
  });
  return Recipe_data;
};