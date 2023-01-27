const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).json(tasks);
  } catch (error) {
    res.status(501).send({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(501).send({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Task.findById(_id);

    if (!task) {
      res.status(400).send();
    } else {
      res.status(201).send(task);
    }
  } catch (error) {
    res.status(501).send({ msg: error });
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteTask = await Task.findByIdAndDelete(_id);
    if (!_id) {
      res.status(400).send();
    } else {
      res.send(deleteTask);
    }
  } catch (error) {
    res.status(501).send({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
