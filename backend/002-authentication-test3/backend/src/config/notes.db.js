import mongoose from "mongoose";
import config from "./config.js";

export const connectDB = async (Id) => {
    try {
        await mongoose.connect(`${config.MONGO_NOTE_URI}/Id`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connected failed\n", error);
        
    }
}