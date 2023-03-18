const router = require("express").Router();

const userController = require("../Controllers/userController");

router.post("/api/user/register", userController.userRegister);
router.post("/api/user/login", userController.userLogin)

module.exports = router;