const router = require("express").Router();

const userController = require("../Controllers/userController");
console.log(userController.userRegister, "userController.userRegister")

router.post("/api/user/register", userController.userRegister);

module.exports = router;