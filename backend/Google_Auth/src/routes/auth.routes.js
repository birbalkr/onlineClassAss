import { Router } from "express";
import passport from '../config/passport.js'
import gitPassport from '../config/passportGit.js'
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

// --------- google auth -------
routes.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    prompt: "select_account"
}))

// google callback 

routes.get("/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/"
    }),
    async (req, res) => {
        const user = req.user
        const email = user.emails[0].value
        console.log(user);
        const isUserExists = await userModel.findOne({ email })
        // --------- Handle login -------
        if (isUserExists) {
            const accessToken = jwt.sign({ id: isUserExists._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
            const refreshToken = jwt.sign({ id: isUserExists._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            res.status(200).json({ accessToken: accessToken,  })
        }
        // -------- handle signup --------
        const newUser = await userModel.create({
            fullname: user.displayName,
            email,
            googleId: user.id

        })

        const accessToken = jwt.sign({ id: newUser._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ id: newUser._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(201).json({ accessToken: accessToken })
    }
)

// --------- github auth --------

routes.get("/github", gitPassport.authenticate("github", { scope: ['user:email'] }))

// github callback 

routes.get("/github/callback", gitPassport.authenticate('github',
    {
        session: false,
        failureRedirect: "/"
    }
),
    async (req, res) => {
        const user = req.user
        console.log(user);
        const githubId = user.id;
        const fullname = user.displayName || user.username;

        const isUserExists = await userModel.findOne({ githubId });

        if (isUserExists) {
            const accessToken = jwt.sign({ id: isUserExists._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
            const refreshToken = jwt.sign({ id: isUserExists._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
            });

            res.status(200).json({ accessToken: accessToken,user:{isUserExists} })
        }

        // user not found

        const newUser = await userModel.create({
            fullname,
            githubId
        })

        const accessToken = jwt.sign({ id: newUser._id }, config.ACCESS_TOKEN, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ id: newUser._id }, config.REFRESH_TOKEN, { expiresIn: '7d' })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
        });

        res.status(201).json({
            accessToken: accessToken,
            user: {
                id: user.id,
                name: user.displayName,
                username: user.username,
                profileUrl: user.profileUrl
            }
        })

    })


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