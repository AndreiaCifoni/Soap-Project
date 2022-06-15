const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./userSchema");

const connectMongoose = async () =>
  await mongoose.connect(
    "mongodb+srv://andreia:andreia@cluster0.w9kxh6y.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useInifiedTopology: true,
    },
    () => {
      console.log("Mongoose Is Connected");
    }
  );

connectMongoose().catch(() => "Mongoose connect failed");

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));

//Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.post("/register", async (req, res) => {
  try {
    await User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.bedy.password, 10);
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  } catch {
    console.log("error");
  }
});
app.get("/user", (req, res) => {
  console.log(req.body);
});

//Start server
app.listen(4000, () => {
  console.log("Server Has Started");
});
