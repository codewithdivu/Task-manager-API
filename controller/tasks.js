const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
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
      return res.status(404).json({ msg: `No task with id : ${_id}` });
    } else {
      res.status(201).send({ task });
    }
  } catch (error) {
    res.status(501).send({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteTask = await Task.findByIdAndDelete(_id);
    if (!deleteTask) {
      return res.status(400).json({ msg: `No task with id : ${_id}` });
    } else {
      res.status(200).json({ deleteTask });
    }
  } catch (error) {
    res.status(501).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400).json({ msg: `No task with id : ${_id}` });
    } else {
      res.status(200).json({ _id, data: req.body });
    }
  } catch (error) {
    res.status(501).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
