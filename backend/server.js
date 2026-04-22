// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "career_portal"
};

// Cloud databases like Aiven require SSL
if (process.env.DB_HOST && process.env.DB_HOST !== "localhost") {
  dbConfig.ssl = {
    rejectUnauthorized: false // Simplest way to connect to managed clouds without manual CA certificates
  };
}

const db = mysql.createConnection(dbConfig);

db.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("MySQL Connected");
});

const otpStore = {}; // Should use DB in production

app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;

  db.query("SELECT email FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Database error checking user:", err);
      return res.status(500).json({ success: false, message: "Database error." });
    }

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: "User already exists." });
    }

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
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email];
    res.json({ verified: true });
  } else {
    res.json({ verified: false });
  }
});

app.post("/api/register", async (req, res) => {
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

app.post("/api/login", (req, res) => {
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

app.post("/api/google-login", (req, res) => {
  const { email, username } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        process.env.JWT_SECRET || "secretkey",
        { expiresIn: "1h" }
      );
      return res.json({ message: "Logged in successfully", token });
    } else {
      const dummyPassword = "google_oauth_user_" + Math.random().toString(36);
      bcrypt.hash(dummyPassword, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });

        db.query(
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
          [username || "Google User", email, hashedPassword],
          (err, insertResult) => {
            if (err) return res.status(500).json({ message: "Database error during registration." });

            const newUserId = insertResult.insertId;
            const token = jwt.sign(
              { id: newUserId, email: email, username: username || "Google User" },
              process.env.JWT_SECRET || "secretkey",
              { expiresIn: "1h" }
            );
            return res.json({ message: "Registered & Logged in successfully", token });
          }
        );
      });
    }
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

app.get("/api/dashboard", verifyToken, (req, res) => {
  db.query("SELECT id, username, email, assessment_count FROM users WHERE id = ?", [req.user.id], (err, results, fields) => {
    if (err) return res.status(500).json({ message: "Database error." });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Welcome to dashboard", user: results[0] });
  });
});

app.post("/api/increment-assessment", verifyToken, (req, res) => {
  db.query("UPDATE users SET assessment_count = assessment_count + 1 WHERE id = ?", [req.user.id], (err) => {
    if (err) return res.status(500).json({ message: "Database error.", error: err });
    res.json({ message: "Assessment count updated successfully" });
  });
});

app.get("/api/jobs", async (req, res) => {
  const { category } = req.query;
  const search_keyword = (category || "").toLowerCase();
  try {
    const response = await axios.get("https://jobicy.com/api/v2/remote-jobs", { timeout: 5000 });
    const all_jobs = response.data.jobs || [];
    let matchedJobs = [];
    
    if (search_keyword) {
      const keywords = search_keyword.split(" ");
      for (let job of all_jobs) {
        const job_title = (job.jobTitle || "").toLowerCase();
        if (keywords.some(word => job_title.includes(word)) || job_title.includes(search_keyword)) {
          matchedJobs.push({
            title: job.jobTitle || "Position Available",
            company: job.companyName || "Tech Company",
            location: job.jobGeo || "Remote",
            url: job.url || "#",
            remote: true
          });
          if (matchedJobs.length >= 2) break;
        }
      }
    }
    
    if (matchedJobs.length === 0 && all_jobs.length > 0) {
      matchedJobs.push({
        title: all_jobs[0].jobTitle || `${category} (Remote)`,
        company: all_jobs[0].companyName || "Global Company",
        location: all_jobs[0].jobGeo || "Worldwide",
        url: all_jobs[0].url || "#",
        remote: true
      });
    }

    if (matchedJobs.length === 0) {
       matchedJobs = [
          {
              title: `${category} Specialist`,
              company: "Global Tech Innovators",
              location: "Worldwide",
              url: "https://www.linkedin.com/jobs",
              remote: true
          },
          {
              title: `Senior ${category}`,
              company: "NextGen Solutions",
              location: "New York, NY",
              url: "https://www.indeed.com/",
              remote: false
          }
      ];
    }
    
    res.json({ jobs: matchedJobs });
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.json({ jobs: [
          {
              title: `${category} Specialist`,
              company: "Global Tech Innovators",
              location: "Worldwide",
              url: "https://www.linkedin.com/jobs",
              remote: true
          },
          {
              title: `Senior ${category}`,
              company: "NextGen Solutions",
              location: "New York, NY",
              url: "https://www.indeed.com/",
              remote: false
          }
      ] });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
