import { config } from "../config/config.js";
import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const UserLogin = async (req, res) => {
    const { email, passwordHash } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        res.status(404).json({
            message: "User Not Found",
        });
        return;
    }

    const isPasswordMatch = await bcrypt.compare(passwordHash, user.passwordHash);

    if (!isPasswordMatch) {
        res.status(401).json({
            message: "Invalid Email & Password",
        });
        return;
    }

    res.status(200).json({
        message: "User Login Successfully",
        data: {
            user: {
                userId: user._id,
                name: user.name,
                email: user.email,
                date: user.date.toISOString().split("T")[0],
            },
        }
    });

}


export const UserRegister = async (req, res) => {
    const { name, email, passwordHash } = req.body;

    const hashPassword = await bcrypt.hash(passwordHash, 10);

    const user = await userModel.create({
        name,
        email,
        passwordHash: hashPassword
    });

    const token = jwt.sign({ id: user._id }, config.JWT_TOKEN);

    res.status(201).json({
        message: "User Register Successfully",
        data: {
            user: {
                userId: user._id,
                name,
                email,
                date: user.date.toISOString().split("T")[0],
            },
            token
        }
    });

}


export const UserMe = async (req, res) => {

    res.status(200).json({
        message: "User Me",
        data: {
            user: {
                userId: req.user._id,
                name: req.user.name,
                email: req.user.email,
                date: req.user.date.toISOString().split("T")[0],
            },
        }
    });
}