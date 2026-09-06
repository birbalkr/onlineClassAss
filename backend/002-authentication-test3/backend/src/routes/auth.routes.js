import express from "express";
import { authControllerLogin, authControllerRegister } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", authControllerRegister)

authRoutes.post("/login", authControllerLogin)



export default authRoutes;