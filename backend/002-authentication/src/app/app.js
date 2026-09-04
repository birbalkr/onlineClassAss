import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { authenticateUser } from "../middleware/auth.middleware.js";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;

    const user = await userModel.create({ name, email, password });

    const token = jwt.sign(
        {
            id: user._id,
        }, "b6cc40ded10176d3225e79ba5adc352ae3e9895c1af5b0035fd6ef176c8ee1ef0fc7cac13e3e53abd7ea1dd48fc2bf68", { expiresIn: "15m" });

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: { name, email, id: user._id },
            token
        }
    });
});


app.get("/api/me", authenticateUser, async (req, res) => {

    res.status(200).json({
        data: {
            user: req.user
        }
    })

})

export default app;

