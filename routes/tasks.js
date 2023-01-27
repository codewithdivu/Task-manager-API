const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

// app.get('api/v1/tasks')          - get all tasks
// app.post('api/v1/tasks')         - create new tasks
// app.get('api/v1/tasks/:id')      - get all tasks
// app.patch('api/v1/tasks/:id')    - get all tasks
// app.delete('api/v1/tasks/:id')   - get all tasks
