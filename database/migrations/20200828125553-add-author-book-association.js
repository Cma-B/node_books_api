"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Books", "AuthorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Authors",
        as: "author",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Books", "AuthorId");
  },
};
