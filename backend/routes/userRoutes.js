import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Register (Signup)
router.post("/signup", registerUser);

// Login (Signin)
router.post("/login", loginUser);

export default router;
