import { Router } from "express";
import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

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

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decode = verifyAccessToken(accessToken);
    const user = await UserModel.findById(decode.id);

    res.status(200).json({
      message: "user fetched successfully",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired access token",
    });
  }
});

router.post("/refreshToken", async (req, res) => {

  const refreshToken = req.cookies.refreshToken;
  
  if (!refreshToken) {
    return res.status(401).json({
      message: "Unauthorized, refresh token not found",
    });
  }

  try {
    const decode = await verifyRefreshToken(refreshToken);

    const user = await UserModel.findById(decode.id);

    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null
      await user.save()

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateToken({
      userId: user._id,
    });

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
    user.refreshToken = newRefreshToken;
    await user.save();

    res.status(200).json({
      message: "Token refreshed successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or expired refresh token",
    });
  }
});

export default router;
