const express = require("express");
let router = express.Router();

const {
  getUsers,
  getSingleUser,
  registerUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");

router.route("/").get(getUsers);
router.route("/:id").get(getSingleUser);
router.route("/").post(registerUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);
module.exports = router;
