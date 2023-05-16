const todoModel = require("../models/todoModel.js");

const getTodo = async (req, res) => {
  const todo = await todoModel.find({});
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

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err));
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;

  console.log('id ---> ', _id);

  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports = {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
};
