import express from 'express';
import dotenv from 'dotenv';
import UserModel from '../models/user.model.js';
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();
app.use(express.json());


app.post("/api/auth/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password
    })

    const token = jwt.sign(
        {
            id: user._id
        }
        , process.env.LOGING_TOKEN_SECRET);

    console.log("token =>  ", token);



    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: { firstName, lastName, email, id: user._id },
            token
        }


    })

})



app.get("/api/auth/me", async (req, res) => {
    const token = req.headers.authorization

    const id = jwt.decode(token);
    console.log(id);


    const user = await UserModel.findById(id.id);



    res.status(200).json({
        message: "User fetched successfully",
        data: {
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user._id,
                date: user.date
            },
        }
    })

});






export default app;