// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "career_portal"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("MySQL Connected");
});

const otpStore = {}; // Should use DB in production

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore[email] = otp;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP for Nirdeshika",
    text: `Hello! Your OTP for Nirdeshika sign-up is: ${otp}`
  };

  transporter.sendMail(mailOptions).catch(err => {
    console.error("Error sending email:", err);
  });
  
  res.json({ success: true });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email];
    res.json({ verified: true });
  } else {
    res.json({ verified: false });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: "User already exists with this email." });
          }
          console.error(err);
          return res.status(500).json({ message: "Database error." });
        }
        res.json({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.json({ message: "Logged in successfully", token });
  });
});

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided." });

  const tokenValue = token.startsWith("Bearer ") ? token.slice(7) : token;

  jwt.verify(tokenValue, process.env.JWT_SECRET || "secretkey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
}

app.get("/dashboard", verifyToken, (req, res) => {
  db.query("SELECT id, username, email, assessment_count FROM users WHERE id = ?", [req.user.id], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Welcome to dashboard", user: results[0] });
  });
});

app.post("/increment-assessment", verifyToken, (req, res) => {
  db.query("UPDATE users SET assessment_count = assessment_count + 1 WHERE id = ?", [req.user.id], (err) => {
    if (err) return res.status(500).json({ message: "Database error.", error: err });
    res.json({ message: "Assessment count updated successfully" });
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
