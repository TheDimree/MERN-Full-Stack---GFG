import express from "express"
import { body } from "express-validator"
import { userSignIn, userSignUp } from "../controllers/UsersController.js"

const router = express.Router()

router.post('/signin',
    [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
        body("password").trim().notEmpty().withMessage("Password is required")
    ],
    userSignIn
);
router.post('/signup', userSignUp)

export default router;