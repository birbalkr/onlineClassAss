import express from "express";
import { authControllerLogin, authControllerMe, authControllerRegister } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", authControllerRegister)

authRoutes.post("/login", authControllerLogin)

authRoutes.get("/me",authMiddleware ,authControllerMe)



export default authRoutes;