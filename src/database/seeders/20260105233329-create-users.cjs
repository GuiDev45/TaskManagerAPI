"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    const passwordHash = await bcrypt.hash("123456", 8);

    await queryInterface.bulkInsert("users", [
      {
        id: "11111111-1111-1111-1111-111111111111",
        name: "Usuário Teste",
        email: "teste@email.com",
        password_hash: passwordHash,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", {
      email: "teste@email.com",
    });
  },
};
