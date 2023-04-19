const todoModel = require("../models/todoModel.js");

const getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

const saveTodo = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text }).then((data) => {
    console.log("Created");
    console.log(data);
    res.send(data);
  });
};

module.exports = {
    getTodo,
    saveTodo
};
