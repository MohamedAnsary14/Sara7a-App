import express from "express";
import { checkEmail } from "../../middleware/checkEmail.js";
import { signIn, signUp, verifyEmail } from "./user.controller.js";
import { validation } from "../../middleware/validation.js";
import { signInSchemaval, signUpSchemaval } from "./user.validation.js";

const userRouter = express.Router()

userRouter.post('/signup',validation(signUpSchemaval),checkEmail, signUp)
userRouter.post('/signin',validation(signInSchemaval) ,signIn)
userRouter.get('/verify/:token', verifyEmail)


export default userRouter;