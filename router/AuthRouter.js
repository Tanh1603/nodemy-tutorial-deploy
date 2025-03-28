const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user");

const registerMiddleware = async (req, res, next) => {
  const existsUser = await userModel.findOne({ username: req.body.username });
  if (existsUser) {
    res.status(400).json({ message: "User already exists" });
  } else {
    next();
  }
};

const loginMiddleware = async (req, res, next) => {
  try {
    const existsUser = await userModel.findOne({ username: req.body.username });
    if (!existsUser) {
      res.status(400).json({ message: "User not found" });
    } else if (existsUser.password !== req.body.password) {
      res.status(400).json({ message: "Password is incorrect" });
    } else {
      req.user = existsUser;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

authRouter.post("/register", registerMiddleware, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new userModel({
    username: username,
    password: password,
  });
  await newUser.save();

  res.json(newUser);
});

authRouter.post("/login", loginMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = authRouter;
