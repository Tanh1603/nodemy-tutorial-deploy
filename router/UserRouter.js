const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/user");
userRouter.get("/", async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

userRouter.get("/:id", async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.json(user);
});

userRouter.post("/", async (req, res) => {
  const user = await userModel.create(req.body);
  res.json(user);
});

userRouter.put("/:id", async (req, res) => {
  const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
  res.json(user);
});

userRouter.delete("/:id", async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  res.json(user);
});

module.exports = userRouter;
