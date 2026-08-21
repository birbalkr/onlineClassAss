const { default: mongoose } = require("mongoose");
require("dotenv").config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connectdb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.qqjrnkp.mongodb.net/`,
    );

    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error in DB.......", error);

    console.log("***************************");

    console.log(USERNAME);
  }
};

module.exports = connectdb;
