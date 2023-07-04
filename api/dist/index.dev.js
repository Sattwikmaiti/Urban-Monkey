"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

var dotenv = require("dotenv");

var userRoute = require("./routes/user");

var authRoute = require("./routes/auth");

var productRoute = require("./routes/product");

var cartRoute = require("./routes/cart");

var orderRoute = require("./routes/order");

var stripeRoute = require("./routes/stripe");

var cors = require("cors");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(function () {
  return console.log("DB Connection Successfull!");
})["catch"](function (err) {
  console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute); // This is your test secret API key.

app.listen(8000, function () {
  return console.log('Running on port 8000');
});