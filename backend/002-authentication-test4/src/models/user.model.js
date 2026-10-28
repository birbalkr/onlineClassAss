import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModels = mongoose.model("User", userModelSchema);
export default userModels;
