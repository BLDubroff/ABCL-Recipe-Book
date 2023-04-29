'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipe_data', {
      recipe_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      pic: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      recipe_content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      prep_time_in_minutes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cook_time_in_minutes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_time_in_minutes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      servings: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      breakfast: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      lunch: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      dinner: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      snack: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      dessert: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      avg_rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipe_data');
  }
};