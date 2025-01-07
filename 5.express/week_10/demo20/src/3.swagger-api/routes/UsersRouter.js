import express from "express"
import { body } from "express-validator"
import { userSignIn, userSignUp } from "../controllers/UsersController.js"

const router = express.Router()

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Login 
 *     description: User wants to login
*/
router.post('/signin',
    [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
        body("password").trim().notEmpty().withMessage("Password is required")
    ],
    userSignIn
);

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Signup 
 *     description: User wants to Signup
*/
router.post('/signup', userSignUp)

export default router;