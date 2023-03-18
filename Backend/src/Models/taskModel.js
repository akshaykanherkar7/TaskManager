const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
  userId: { type: String, required: true },
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = TaskModel;
