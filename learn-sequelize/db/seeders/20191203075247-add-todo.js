"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Todos", [
            {
                todo: "Makan",
                status: 0,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                todo: "Tidur",
                status: 0,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Todos", null, {});
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
