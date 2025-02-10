'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Ashley Galvin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patrick Beach',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MacKenzie Miller',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
