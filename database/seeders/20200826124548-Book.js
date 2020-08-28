"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Intro - in Test ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Intro C- in Test ",
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
