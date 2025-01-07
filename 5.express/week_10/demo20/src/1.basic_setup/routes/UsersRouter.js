import express from "express"
import {userSignIn, userSignUp} from "../controllers/UsersController.js"

const routers = express.Router()

routers.post('/signin', userSignIn)
routers.post('/signup', userSignUp)

export default routers;