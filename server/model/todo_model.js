const mongoose = require("mongoose");
const Joi = require("joi");

//create todoSchema
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

//create model
const Todo = mongoose.model("Todo", todoSchema);

//validate requ
const validateTodo = (data) => {
  const schema = Joi.object({
    task: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports.Todo = Todo;
module.exports.validateTodo = validateTodo;
