/**
 * 
 */

import express from "express";
import * as usersCtrl from "../controllers/usersController";
import { validateBody } from "../middleware/validateBody";
import { signUpSchema, signInSchema } from "../schemas/validationSchemas";
import { 
    confirmPassword, isUserNew, isUserInDB, verifyPassword 
} from "../middleware/usersMiddleware";
const router = express.Router();
const validateSchema = validateBody(signUpSchema)

router.get("/getUsers", usersCtrl.getUsers);

router.post("/signUp", validateSchema,
    confirmPassword, isUserNew, usersCtrl.signUp);

router.post("/signIn", validateBody(signInSchema),
    isUserInDB, verifyPassword, usersCtrl.signIn);


export default router;