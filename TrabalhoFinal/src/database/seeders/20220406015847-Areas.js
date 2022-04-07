"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Areas",
      [
        {
          id: 1,
          area: "Ciências Exatas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          area: "Ciências Humanas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          area: "Ciências Biologicas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Areas", null, {});
  },
};
