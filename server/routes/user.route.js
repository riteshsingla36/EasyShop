const UserController = require("../controllers/user.controller");
const express = require("express");

const router = express.Router();

router.get("/all", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.patch("/update/:id", UserController.updateUser);

module.exports = router;