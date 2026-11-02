import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectDB() {
    await mongoose.connect(config.MONGO_URL)
    console.log('====================================');
    console.log("DataBase Connected Successfully");
    console.log('====================================');
}