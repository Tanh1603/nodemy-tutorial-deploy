const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const authRouter = require("./router/AuthRouter");
const userRouter = require("./router/UserRouter");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
