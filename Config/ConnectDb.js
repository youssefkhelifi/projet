require("dotenv").config();
const mongoose = require("mongoose");
const URL =
"mongodb+srv://youssef:Aa20114021@cluster0.iiq7lct.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(URL);

    console.log("db is successfully connected");
  } catch (error) {
    console.log("db failed to connect");
  }
};
module.exports = connectDb;
