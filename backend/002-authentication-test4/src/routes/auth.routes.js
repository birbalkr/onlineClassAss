import { Router } from "express";
import {
  authLogin,
  authMe,
  authregister,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const routes = Router();

routes.post("/login", authLogin);
routes.post("/register", authregister);
routes.get("/me", authenticateUser, authMe);

export default routes;
