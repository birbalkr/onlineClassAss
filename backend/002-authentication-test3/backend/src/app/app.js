import express from "express";
import authRoutes from "../routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import notesRoutes from "../routes/notes.routes.js";
import config from "../config/config.js";

const app = express();

app.use(cors({
    origin: config.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the Notes API");
})

app.get("/api/auth/health", (req, res) => {
    res.status(200).json({ message: "API is healthy" });
})
app.use("/api/auth", authRoutes)
app.use("/api/notes", notesRoutes);



export default app;