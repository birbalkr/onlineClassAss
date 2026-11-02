import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    })


const shortUrlModel = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrlModel