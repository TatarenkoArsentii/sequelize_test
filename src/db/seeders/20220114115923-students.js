"use strict";
const bcrypet = require("bcrypt");
function generateStudents() {
  const students = [];
  for (let i = 0; i < 10; i++) {
    students.push({
      firstName: `john`,
      lastName: "Doe",
      email: `email${i}@exemple.com`,
      password: "password",
      login: `Login${i}`,
      passwordHash: bcrypet.hashSync(`password${i}`, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return students;
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Students", generateStudents(), {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Students", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
