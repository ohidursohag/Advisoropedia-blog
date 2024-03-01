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














app.get("/", (req, res) => {
   res.send("Hello from Advisoropedia Server..");
 });
 
 app.listen(port, () => {
   console.log(`Advisoropedia is running on port ${port}`);
 });