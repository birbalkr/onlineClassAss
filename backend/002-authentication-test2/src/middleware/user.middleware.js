import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";

const isUserLogin = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        res.status(401).json({
            message: "Unauthorized",
        });
        return;
    }

    const UserId =await jwt.decode(token);

    const user = await userModel.findById(UserId.id);

    console.log(user);
    
    if (!user) {
        res.status(401).json({
            message: "Unauthorized",
        });
        return;
    }

    req.user = user;
    next();

}

export default isUserLogin;