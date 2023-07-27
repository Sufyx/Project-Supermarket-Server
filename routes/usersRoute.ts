/**
 * 
 */

const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");
const { validateBody } = require("../middleware/validateBody");
const {signUpSchema, loginSchema } = require("../schemas/validationSchemas");
const {
    confirmPassword, isUserNew, encryptPassword
} = require("../middleware/usersMiddleware");


router.get("/getUsers", UsersController.getUsers);

router.post("/signup", validateBody(signUpSchema), confirmPassword, 
// isUserNew, encryptPassword, 
UsersController.signUp);


export default router;