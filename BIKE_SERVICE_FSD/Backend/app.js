const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const userRoute = require("./route/user.route");
const serviceRoute = require("./route/service.route");
const bookingRoute = require("./route/booking.route");
require("dotenv").config();

const app = express();

// Enable CORS with specific options
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  })
);
// Parse cookies from incoming requests
app.use(cookieParser());
// Parse incoming JSON data
app.use(bodyParser.json());
// Middleware to set response headers for CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,UPDATE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  next();
});
// API routes
app.use("/api/v1/services", serviceRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/user", userRoute);
module.exports = app;
