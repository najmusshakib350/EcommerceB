require("express-async-errors");
const express = require("express");
// const compression=require('compression');
const app = express();
const cors = require("cors");
const error = require("./middlewares/error");

const userRouter = require("./routers/userRouter");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");
const cartRouter = require("./routers/cartRouter");
const profileRouter = require("./routers/profileRouter");
const paymentRouter = require("./routers/paymentRouter");

// app.use(compression);
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/profile", profileRouter);
app.use("/api/payment", paymentRouter);

app.use(error);

module.exports = app;
