"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(64),
        validate: {
          isAlpha: true,
        },
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(64),
        validate: {
          isAlpha: true,
        },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(128),
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      login: {
        type: Sequelize.STRING,
        validate: {
          len: [4, 16],
        },
      },
      passwordHash: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Students");
  },
};
