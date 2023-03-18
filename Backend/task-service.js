const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const { connection } = require("./src/Config/config");
const userRoutes = require("./src/Routes/userRoute");
const taskRoutes = require("./src/Routes/taskRoute");

const Authentication = require("./src/Middlewares/Authentication");

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Tried to access Task-Manager Home page." });
});

app.use("/user-manager", userRoutes);
app.use("task-manager", Authentication, taskRoutes);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB");
  }
  console.log("Server started on port " + process.env.PORT);
});
