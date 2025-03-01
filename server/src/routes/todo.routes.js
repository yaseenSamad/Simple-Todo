const express = require("express");
const {getTodoDetails,deleteTodoDetails,updateTodoDetailStatus,addTodoDetail} = require('../controllers/todo.controller')

const router = express.Router()

router.get("/get-todo-details",getTodoDetails);

router.delete("/delete-todo-details/:id",deleteTodoDetails);

router.post("/add-todo-details",addTodoDetail);

router.patch("/update-todo-details/:id",updateTodoDetailStatus);

module.exports = router;