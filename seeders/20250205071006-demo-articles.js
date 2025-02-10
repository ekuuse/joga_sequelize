'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Articles', [{
      name: 'Introduction to Ashtanga',
      slug: 'introduction-to-ashtanga',
      image: 'ashtanga.jpg',
      body: '<p>mida iganes siia ka ei peaks kirjutama<p>',
      published: '2020-01-08 15:02:29',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Morning vinyasa flow routine',
      slug: 'morning-vinyasa-flow-routine',
      image: 'morning.jpg',
      body: '<p>eeeeeeeeeeeeeeeeeeeeeeee<p>',
      published: '2020-01-09 13:02:29',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Secrets of a yoga teacher',
      slug: 'secrets-of-a-yoga-teacher',
      image: 'yoga-teacher.jpg',
      body: '<p>saladusi ei avaldata<p>',
      published: '2020-01-10 19:02:29',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {})
  }
};

