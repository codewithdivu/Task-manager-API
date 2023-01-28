const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

// get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
});

// creating task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// get single task
const getTask = asyncWrapper(async (req, res, next) => {
  const _id = req.params.id;
  const task = await Task.findById(_id);

  if (!task) {
    const error = new Error("Not-Found");
    error.status = 404;
    return next(error);
    return res.status(404).json({ msg: `No task with id : ${_id}` });
  } else {
    res.status(201).send({ task });
  }
});

// delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const deleteTask = await Task.findByIdAndDelete(_id);
  if (!deleteTask) {
    return res.status(400).json({ msg: `No task with id : ${_id}` });
  } else {
    res.status(200).json({ deleteTask });
  }
});

// update task
const updateTask = asyncWrapper(async (req, res) => {
  const _id = req.params.id;
  const task = await Task.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(400).json({ msg: `No task with id : ${_id}` });
  } else {
    res.status(200).json({ _id, data: req.body });
  }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
