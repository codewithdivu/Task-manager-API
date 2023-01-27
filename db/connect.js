const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/task-manager", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to mongoDB is successfull....");
  })
  .catch((e) => {
    console.log("error", e);
  });
