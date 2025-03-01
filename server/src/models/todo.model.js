const pool = require("../config/db");

exports.createTodoTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todo_details (
        todoId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        todoText TEXT NULL,
        isCompleted BOOLEAN DEFAULT false NOT NULL,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Todo table ready");
  } catch (error) {
    console.error("Error creating Todo table:", error);
  }
};
