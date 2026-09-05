import express from "express";
import { UserLogin, UserMe, UserRegister } from "../controllers/user.controllers.js";
import isUserLogin from "../middleware/user.middleware.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/me",isUserLogin, UserMe)

export default router;