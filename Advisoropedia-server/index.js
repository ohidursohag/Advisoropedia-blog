const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5001;
const dbUri = process.env.DB_uri;
const app = express();

// Middlewears
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB through Mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUri);
}

// Register route
app.post("/advisoropedia/api/v1/register", async (req, res) => {
  const { fullName, email, profileImage, password, userRole } =
    req.body;

  try {
    // console.log('register hit')
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ error: true, message: "User already Registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log('Hash',hashedPassword)
    // Create new user
    const newUser = {
      fullName,
      email,
      profileImage,
      password: hashedPassword,
      userRole,
      phoneNumber,
    };
    // console.log(newUser);
    // Save user to database
    await userModel.create(newUser);

    return res.json({ error: false, message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Login route
app.post("/advisoropedia/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    console.log("Login end hit");
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Create and send JWT token
    const token = jwt.sign(
      {
        fullName: user.fullName,
        email: user.email,
        profileImage: user.profileImage,
        userRole: user.userRole,
        phoneNumber: user.phoneNumber,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
      })
      .send({ success: true, token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


// Clear access token when user logged out
app.get("/advisoropedia/api/v1/logout", async (req, res) => {
  try {
    res
      .clearCookie("accessToken", {
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
      })
      .send({ success: true });
  } catch (error) {
    return res.send({ error: true, error: error.message });
  }
});











app.get("/", (req, res) => {
   res.send("Hello from Advisoropedia Server..");
 });
 
 app.listen(port, () => {
   console.log(`Advisoropedia is running on port ${port}`);
 });