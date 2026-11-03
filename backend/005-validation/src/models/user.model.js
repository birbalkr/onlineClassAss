import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    emial: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        types: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }

})


const userModel = mongoose.model("users", userSchema)
export default userModel;