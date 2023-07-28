/**
 * 
 */

const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/usersController");
const { validateBody } = require("../middleware/validateBody");
const {signUpSchema, signInSchema } = require("../schemas/validationSchemas");
const {
    confirmPassword, isUserNew, isUserInDB, encryptPassword, verifyPassword
} = require("../middleware/usersMiddleware");


router.get("/getUsers", UsersController.getUsers);

router.post("/signup", validateBody(signUpSchema), 
confirmPassword, isUserNew, encryptPassword, 
UsersController.signUp);

router.post("/signin", validateBody(signInSchema),
    isUserInDB, verifyPassword, UsersController.signIn);


export default router;