"use strict";

const author = require("../../models/author");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
    await queryInterface.bulkDelete("Authors", null, {});
    await queryInterface.bulkInsert("Authors", [
      {
        firstName: "Sima",
        lastName: "Boreyri",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const authors = await queryInterface.sequelize.query(
      `SELECT id from "Authors";`
    );

    const authorsRows = authors[0]

    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Intro - in Test ",
          createdAt: new Date(),
          updatedAt: new Date(),
          AuthorId: authorsRows[0].id,
        },
        {
          title: "Intro C- in Test ",
          createdAt: new Date(),
          updatedAt: new Date(),
          AuthorId: authorsRows[0].id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
