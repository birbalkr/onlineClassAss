import mongoose from "mongoose";
import { config } from "./config.js";

export default async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);

    }
}