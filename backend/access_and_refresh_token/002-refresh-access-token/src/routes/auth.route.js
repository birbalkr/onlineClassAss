import { Router } from "express";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await UserModel.findOne({ email });

  if (isUserExists) {
    res.status(400).json({
      message: "User already eixsts",
      error: [{ field: "email", message: "User already exists" }],
    });
  }

  const user = await UserModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  const { accessToken, refreshToken } = generateToken({ userId: user._id });
  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(200).json({
    message: "user register successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    },
  });
});

export default router;
