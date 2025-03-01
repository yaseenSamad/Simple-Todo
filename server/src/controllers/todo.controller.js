const pool = require("../config/db");

exports.getTodoDetails = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todo_details");
    console.log('table fetch' , result);
    res.json({data: result.rows}); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTodoDetails = async (req, res) => {
    try {
      const rowId = req?.params?.id
      const result = await pool.query("DELETE FROM todo_details WHERE \"todoId\" = $1 RETURNING *",[rowId]);
      console.log('row delete' , result);
      
      if (result.rowCount > 0) {
        res.json({data:true});
      } else {
        res.json({data:false});
      } 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateTodoDetailStatus = async (req, res) => {
    try {
      const rowId = req?.params?.id
      const {isCompleted} = req.body

      const result = await pool.query(
        "UPDATE todo_details SET \"isCompleted\" = $1 WHERE \"todoId\" = $2 RETURNING *",
        [isCompleted, rowId]
      );
      
      console.log('row update' , result);

      if (result.rowCount > 0) {
        res.json({data:true});
      } else {
        res.json({data:false});
      } 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.addTodoDetail = async (req, res) => {
    try {
      console.log('here');
      const {todoText,isCompleted} = req.body
      console.log("Received data:", req.body);

      if (!todoText) {
        return res.status(400).json({ error: "todoText is required" });
      }
  
      const result = await pool.query(
        `INSERT INTO todo_details ("todoText", "isCompleted")
         VALUES ($1, $2) RETURNING *`,
        [todoText, isCompleted || false]
      );

      if (result.rowCount > 0) {
        res.json({data:true});
      } else {
        res.json({data:false});
      } 
    } catch (error) {
      console.log(error,'error');
      res.status(500).json({ error: error.message });
    }
  };
