'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_data', [{
      user_id: 1,
      username: 'username',
      password: 'password'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rating_reviews', null, {});
  }
};
