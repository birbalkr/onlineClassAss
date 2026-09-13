import express from "express";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens, verifyAccessToken, verifyRefreshToken } from "../utils/auth.js";

const router = express.Router();

router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    const isUserExists = await UserModel.findOne({ email });
    if (isUserExists) {
        return res.status(400).json({
            message: "User already exists",
            errors: [
                {
                    field: "email",
                    message: "User already exists"
                }
            ]
        });
    }

    const user = await UserModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password, 10)
    })

    const { accessToken, refreshToken } = await generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    })

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email,
            },
            accessToken,
        }
    })
})



router.get("/me", async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];

    try {
        const decoded = await verifyAccessToken(accessToken);
        const user = await UserModel.findById(decoded.id);

        res.status(200).json({
            message: "User fetched successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email,
                }
            }
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, invalid access token",
            errors: [
                {
                    field: "accessToken",
                    message: "Invalid access token"
                }
            ]
        });
    }
})


router.post("/refresh", async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: "Unauthorized, refresh token not found",
        });
    }

    try {
        const decoded = await verifyRefreshToken(refreshToken);

        const user = await UserModel.findById(decoded.id);

        if (refreshToken !== user.refreshToken) {
            user.refreshToken = null;
            await user.save();

            return res.status(401).json({
                message: "Unauthorized, refresh token mismatch",
            });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id });

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        })

        user.refreshToken = newRefreshToken;
        await user.save();


        res.status(200).json({
            message: "Tokens refreshed successfully",
            accessToken,
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired refresh token",
        })
    }

})

export default router;