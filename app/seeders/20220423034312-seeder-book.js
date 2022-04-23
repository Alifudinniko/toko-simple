'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Items', [
      {
        id :1,
        name: 'Indomie Goreng Ori',
        user:2,
        category:1,
        price: 3500,
        image:'/uploads/image.png',
        stock:20,

        createdAt :new Date(),
        updatedAt :new Date(),
      },
      {
        id :2,
        name: 'Indomie Goreng Ayam Geprek',
        user:2,
        category:1,
        price: 3500,
        image:'/uploads/image2.png',
        stock:15,

        createdAt :new Date(),
        updatedAt :new Date(),
      },
      {
        id :3,
        name: 'Teh Gelas',
        user:2,
        category:2,
        price: 100,
        image:'/uploads/image3.png',
        stock:30,

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
