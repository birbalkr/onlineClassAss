import dotenv from 'dotenv';
dotenv.config();


const config = {
    mongoUrl: process.env.MONGO_URL,
    port: process.env.PORT,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
};

export default config;