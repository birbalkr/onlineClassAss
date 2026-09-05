import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { authenticateUser } from "../middleware/auth.middleware.js";
import bcrypt from "bcryptjs";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;

    const user = await userModel.create({ name, email, password: await bcrypt.hash(password, 10) });

    const token = jwt.sign(
        {
            id: user._id,
        }, process.env.JWT_SECRET, { expiresIn: "15m" });

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: { name, email, id: user._id },
            token
        }
    });
});


app.post("/api/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    console.log("find email ->", user);
    

    const isValidPassword = await bcrypt.compare(password, user.password);

    console.log("isValidPassword ->", isValidPassword);

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
        }, process.env.JWT_SECRET)

    res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: { name: user.name, email: user.email, id: user._id },
            token
        }
    })
})

app.get("/api/me", authenticateUser, async (req, res) => {

    res.status(200).json({
        data: {
            user: req.user
        }
    })

})

export default app;

