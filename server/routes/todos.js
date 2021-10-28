const express = require("express");
const { Todo, validateTodo } = require("../model/todo_model");

const router = express.Router();

//GET
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

//POST
router.post("/", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.send(error.message[0].details);
  const todo = await new Todo({
    task: req.body.task,
  });
  const results = await todo.save();
  res.send(results);
});

//PATCH
router.patch("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send("Requested todo not found");
  //update todo
  todo.completed = !todo.completed;
  const result = await todo.save();
  res.send(result);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const toDelete = await Todo.findByIdAndRemove(req.params.id);
  if (!toDelete) return res.status(404).send("Requested todo not found");
  res.send(toDelete);
});
//delete all completed todos
router.delete("/", async (req, res) => {
  const toDelete = await Todo.deleteMany({ completed: true });
  res.send(toDelete);
});

module.exports = router;
