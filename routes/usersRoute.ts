/**
 * 
 */

const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");


router.get("/getUsers", UsersController.getUsers);


export default router;