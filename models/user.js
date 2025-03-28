const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://tanh:16032005@tanh.eplif.mongodb.net/Expressjs-DB")
  .then(() => console.log("🔥 MongoDB connected!"))
  .catch((err) => console.error("❌ Connection error:", err));

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
