import { config } from "../config/config.js";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    console.log(token);

    const data = jwt.verify(token, config.JWT_SECRET);
    
    console.log(data);
    

    const user = await userModel.findById(data.id);

    req.user = user;
    next();
}