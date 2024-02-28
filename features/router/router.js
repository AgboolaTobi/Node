const express = require("express");


const router = express.Router();

const { register,login,deleteUser,updateUser} = require("../controller/userController");

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/deleteUser").post(deleteUser)

router.route("/updateUser").post(updateUser)

module.exports = router;