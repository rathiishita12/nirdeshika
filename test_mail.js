require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
  subject: "Test",
  text: "Testing"
};

console.log("Sending mail...");
transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.error("Error:", err);
  else console.log("Success:", info.response);
  process.exit();
});
