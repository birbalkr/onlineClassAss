const { default: mongoose } = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb+srv://birbal252397_db_user:1sLssSR4MVtbNi5g@cluster0.qqjrnkp.mongodb.net/");
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error in DB.......", error);
  }
};


module.exports = connectdb;