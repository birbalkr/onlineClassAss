import express from 'express';
import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import bcrypt from 'bcryptjs';
import { authenticateUser } from '../middleware/auth.middleware.js';

const app = express();
app.use(express.json());

app.post("/api/auth/register", async (req, res) => {
    const { name, email, passwordHash } = req.body;

    const passwdHash = await bcrypt.hash(passwordHash, 10);

    const user = await userModel.create({ name, email, passwordHash: passwdHash });


    const token = jwt.sign({ id: user._id }, config.JWT_SECRET);

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
                passwordHash: user.passwordHash
            },
            token
        }
    })
})

app.post("/api/auth/login", async (req, res) => {
    const { email, passwordHash } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const ispasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);

    if (!ispasswordValid) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
            },
            token: jwt.sign({ id: user._id }, config.JWT_SECRET)
        }
    })
})

app.get("/api/auth/me", authenticateUser, async (req, res) => {

    res.status(200).json({
        message: "User fetched successfully",
        data: {
            user: {
                name: req.user.name,
                email: req.user.email,
            }
        }
    })
})


export default app;