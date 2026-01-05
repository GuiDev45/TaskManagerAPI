"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("tasks", [
      {
        id: "22222222-2222-2222-2222-222222222222",
        title: "Estudar Sequelize",
        description: "Criar models e migrations",
        completed: false,
        user_id: "11111111-1111-1111-1111-111111111111",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("tasks", {
      title: "Estudar Sequelize",
    });
  },
};
