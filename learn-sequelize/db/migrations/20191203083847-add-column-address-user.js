"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("Users", "address", {
            type: Sequelize.STRING,
            allowNull: true
        });
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("Users", "address");
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    }
};
