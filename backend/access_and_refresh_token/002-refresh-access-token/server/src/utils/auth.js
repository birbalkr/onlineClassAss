import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const generateToken = ({ userId }) => {
  const accessToken = jwt.sign({ id: userId }, config.ACCESS_TOKEN, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userId }, config.REFRESH_TOKEN, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

export function verifyAccessToken(token) {
  const decode = jwt.verify(token, config.ACCESS_TOKEN);
  return decode;
}

export function verifyRefreshToken(token) {
  const decode = jwt.verify(token, config.REFRESH_TOKEN);
  return decode;
}
