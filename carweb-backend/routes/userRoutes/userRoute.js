const express = require("express");
const userController = require ("../../userController/userController");

const router = express.Router();
router.post("/addUser", userController.addUser);
router.get("/getAllUsers", userController.getUsers);
router.delete("/deleteUser/:id", userController.deleteUser);
router.patch("/updateUserById/:id", userController.updateUser);
router.put("/updateTheUser/:id", userController.updateTheUser);
module.exports = router;