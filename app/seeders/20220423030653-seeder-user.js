'use strict';
const bycrpt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
  
     const password = bycrpt.hashSync('alif',10);
      await queryInterface.bulkInsert('Users', [
      {
        name: 'Kasir Toko',
        email: 'kasir@gmail.com',
        password: password,
        role : 'kasir',
        createdAt :new Date(),
        updatedAt :new Date(),
      },
      {
        name: 'Admin Toko',
        email: 'admin@gmail.com',
        password: password,
        role : 'admin',
        createdAt :new Date(),
        updatedAt :new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
