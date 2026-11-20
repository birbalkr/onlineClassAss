import { Router } from "express";
import passport from '../config/passport.js'
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";


const routes = Router()

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
export default routes