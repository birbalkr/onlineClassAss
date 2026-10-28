import userModels from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const authLogin = async (req, res) => {
  const { email, password } = req.body;
};

export const authregister = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModels.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    { expiresIn: "15m" },
  );

  res.status(200).json({
    message: "User register successfully",
    data: {
      user: {
        name,
        email,
        id: user._id,
      },
      token,
    },
  });
};

export const authMe = async (req, res) => {
  res.status(200).json({
    message: "user data fetch successfuly..",
    data: {
      user: req.user,
    },
  });
};
