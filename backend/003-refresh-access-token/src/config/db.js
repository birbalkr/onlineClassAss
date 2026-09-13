import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    mongoose.connect(config.MONGO_URL);
    console.log("Connected DB............");
    
}

export default connectDB;