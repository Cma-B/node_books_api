"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Intro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Intro C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
