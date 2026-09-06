import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authControllerRegister = async (req, res) => {
    const { username, name, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        name,
        email,
        password: hashPassword
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
    });

    res.status(201).json({
        message: "User registered successfully",
        data: {
            user: {
                username: user.username,
                name: user.name,
                email: user.email
            },
            token
        }
    });

}




export const authControllerLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });


    console.log(user);


    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email and password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
        message: "User logged in successfully",
        data: {
            user: {
                username: user.username,
                name: user.name,
                email: user.email
            }
            , token
        }
    });
}


export const authControllerMe = async (req, res) => {

    const user = await userModel.findById(req.user.id);

    res.status(200).json({
        message: "User fetched successfully",
        data: {
            user: {
                username: user.username,
                name: user.name,
                email: user.email
            }
        }
    })
}