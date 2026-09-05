import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


const userModel = mongoose.model("User", userSchema);
export default userModel;