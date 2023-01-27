require("./db/connect");

const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello bhai kem so");
});

app.use("/api/v1/tasks", tasks);

// app.get('api/v1/tasks')          - get all tasks
// app.post('api/v1/tasks')         - create new tasks
// app.get('api/v1/tasks/:id')      - get all tasks
// app.patch('api/v1/tasks/:id')    - get all tasks
// app.delete('api/v1/tasks/:id')   - get all tasks

// SERVER

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`);
});
