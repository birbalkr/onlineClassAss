import dotenv from "dotenv";
dotenv.config();


export const config = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,

    GIT_CLIENT_ID: process.env.GIT_CLIENT_ID,
    GIT_CLIENT_SECRET: process.env.GIT_CLIENT_SECRET,
    GIT_CALLBACK_URL: process.env.GIT_CALLBACK_URL


}