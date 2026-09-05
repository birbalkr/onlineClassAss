import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    
    console.log(data);
    

    const user = await userModel.findById(data.id);

    req.user = user;
    next();
}