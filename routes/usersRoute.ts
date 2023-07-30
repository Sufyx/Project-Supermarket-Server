/**
 * 
 */

const express = require("express");
const router = express.Router();
import * as usersCtrl from "../controllers/usersController";
import { validateBody } from "../middleware/validateBody";
import { signUpSchema, signInSchema } from "../schemas/validationSchemas";
import { 
    confirmPassword, isUserNew, isUserInDB, verifyPassword 
} from "../middleware/usersMiddleware";
//const ... = validateBody(signUpSchema)
// consistency with middleware naming (validateNewUser)

router.get("/getUsers", usersCtrl.getUsers);

router.post("/signUp", validateBody(signUpSchema),
    confirmPassword, isUserNew, usersCtrl.signUp);

router.post("/signIn", validateBody(signInSchema),
    isUserInDB, verifyPassword, usersCtrl.signIn);


export default router;