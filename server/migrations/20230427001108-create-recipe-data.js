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
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        defaultValue: []
      },
      avg_rating: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipe_data');
  }
};