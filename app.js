const express = require("express");
const app = express();
// Database
const connectDb = require("./db/connect");
const tasks = require("./routes/tasks");
// env setup
require("dotenv").config();
// notfound
const notFound = require("./middleware/not-found");

const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
// SERVER

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
