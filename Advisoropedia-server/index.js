const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5001;
const dbUri = process.env.DB_uri;
const app = express();
const userModel = require("./models/user.js");
const postModel = require("./models/posts.js");
// Middlewears
const corsOptions = {
  origin: ["http://localhost:5173", "https://advisoropedia.vercel.app"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

// Verify Access Token
const verifyToken = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;
  // console.log('Value of Access Token in MiddleWare -------->', accessToken);
  if (!accessToken) {
    return res.status(401).send({ message: "UnAuthorized Access", code: 401 });
  }
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res
        .status(401)
        .send({ message: "UnAuthorized Access", code: 401 });
    }
    req.user = decoded;

    next();
  });
};

// Connect to MongoDB through Mongoose
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(dbUri, { dbName: "advisoropediaDB" });
}

// Register route
app.post("/advisoropedia/api/v1/register", async (req, res) => {
  const { fullName, email, profileImage, password, userRole } = req.body;
  try {
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
    };
    // console.log(newUser);
    // Save user to database
    await userModel.create(newUser);

    return res.json({ error: false, message: "Registration successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Login with google
app.post("/advisoropedia/api/v1/google-login", async (req,res ) => {
  const { fullName, email, profileImage, userRole, verified_email } = req.body; 
  try {
    const isExistingUser = await userModel.findOne({ email });
    if (!isExistingUser) {
      const newUser = {
        fullName,
        email,
        profileImage,
        verified_email,
        userRole,
      };
      // Save user to database
      await userModel.create(newUser);
    }
    // Create and send JWT token
    const token = jwt.sign(
      {
        fullName,
        email,
        profileImage,
        verified_email,
        userRole,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true, token });
  } catch (error) {
    return res.json({ message: "Internal server error" });
  }
});

// Login route
app.post("/advisoropedia/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
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
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
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
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (error) {
    return res.send({ error: true, error: error.message });
  }
});

// get All Posts with
app.get("/advisoropedia/api/v1/all-posts", verifyToken, async (req, res) => {
  try {
    const limit = req.query.limit;
    const page = req.query.page;
    const search = req.query.search;
    const { tags } = req.query;
    const query = {};
    if (tags) query.tags = tags;
    if (search) {
      // Add search conditions to the query
      query.$or = [{ title: { $regex: search, $options: "i" } }];
    }
    const skip = (page - 1) * limit || 0;
    const result = await postModel
      .find(query)
      .sort({ publish_date: -1 })
      .skip(skip)
      .limit(limit);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// grt single Post by Id
app.get("/advisoropedia/api/v1/post/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const result = await postModel.findOne({
    _id: id,
  });
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("Hello from Advisoropedia Server..");
});

app.listen(port, () => {
  console.log(`Advisoropedia is running on port ${port}`);
});
