const router = require("express").Router();

const taskController = require("../Controllers/taskController");

router.post("/api/task/create", taskController.addTask)

module.exports = router;