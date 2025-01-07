import express from "express";
import { Login, Register } from "../controllers/AuthController.js";
const router =express.Router();
router.post("/signin",Login);
router.post("/signup",Register);
export default router;