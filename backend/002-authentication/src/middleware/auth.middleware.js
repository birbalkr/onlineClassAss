import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization

    const data = jwt.decode(token);

    const user = await userModel.findById(data.id);

    req.user = user;
    next();
}