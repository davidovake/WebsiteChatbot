var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
var logger = require("morgan");
var trainAI = require("./chatbotService");
var cors = require("cors");

var app = express();
require("dotenv").config();
app.use(cors());

/**
 * Training the chatbot on server initialising
 */
trainAI.trainChatBotIA();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./frontend/build")));

/**
 * Setup method for creating the email transporter
 */
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

/**
 * Method that checks if the transporter was created successfully
 */
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

/**
 * REST API POST method for handling the email sending requests
 */
app.post("/api/newsletter", function (req, res) {
  console.log("Body: ", req.body);

  let mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Subscribing to StemIO newsletter`,
    text: `Dear user,\n\nThank you for subscribing to the newsletter.\n\nKind regards,\nStemIO team`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

/**
 * Route forwarding to the frontend
 */
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
