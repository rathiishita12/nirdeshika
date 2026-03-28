// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

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

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.json({ success: false });
  }
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

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
