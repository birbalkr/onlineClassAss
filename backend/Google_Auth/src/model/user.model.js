
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: function () {
            return !this.githubId && !this.googleId;
        },
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId && !this.githubId;
        }
    },
    googleId: {
        type: String
    },
    githubId: {
        type: String
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

export default userModel;
