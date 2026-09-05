import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = jwt.decode(token);
    console.log(userId);


    const user = await userModel.findById(userId.id);

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
}