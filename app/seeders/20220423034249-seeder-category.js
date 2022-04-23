'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   

    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: "makanan",
        user: 2,
        createdAt :new Date(),
        updatedAt :new Date(),
      },
      {
        id: 2,
        name: "minuman",
        user: 2,
        createdAt :new Date(),
        updatedAt :new Date(),
      },
      {
        id: 3,
        name: "bensin",
        user: 2,
        createdAt :new Date(),
        updatedAt :new Date(),
      },
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
