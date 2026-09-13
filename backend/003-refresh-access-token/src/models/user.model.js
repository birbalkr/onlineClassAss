import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name should be at least 3 characters"],
        maxlength: [50, "Name should be at most 50 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    },
    passwordHash: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,

    }
})


const UserModel = mongoose.model("User", userSchema);

export default UserModel;