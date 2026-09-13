import dotenv from 'dotenv'
dotenv.config()


const config = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT || 3000,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET

}


export default config;