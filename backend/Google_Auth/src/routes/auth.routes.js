import { Router } from "express";
import passport from '../config/passport.js'
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import Redis from "ioredis";
const routes = Router()

const redis = new Redis({
    host: "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: 3
});

redis.on("connect", () => {
    console.log("Connected to Redis");
});


routes.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    prompt: "select_account"
}))

routes.get("/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/"
    }),
    async (req, res) => {
        const user = req.user
        const email = user.emails[0].value
        console.log(user);

        const isUserExists = userModel.findOne({ email })

        // --------- Handle login -------

        if (isUserExists) {
            const accessToken = jwt.sign({ id: isUserExists._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
            const refreshToken = jwt.sign({ id: isUserExists._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            res.status(200).json({ accessToken: accessToken, email })
        }


        // -------- handle signup --------
        const newUser = await userModel.create({
            fullname: user.displayName,
            email,
            googleId: user.id

        })

        const accessToken = jwt.sign({ id: isUserExists._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ id: isUserExists._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(201).json({ accessToken: accessToken })


    }
)



routes.get("/", async (req, res) => {
    try {
        const cachedUsers = await redis.get("users");

        if (cachedUsers) {
            return res.status(200).json({
                success: true,
                message: "User data fetched from Redis cache",
                user: JSON.parse(cachedUsers)
            });
        }

        const users = await userModel.find();

        await redis.set(
            "users",
            JSON.stringify(users),
            "EX",
            60
        );

        return res.status(200).json({
            success: true,
            message: "User data fetched from MongoDB",
            user: users
        });

    } catch (error) {
        console.error("User route error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch user data",
            error: error.message
        });
    }
});

export default routes