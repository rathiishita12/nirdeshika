// login.js

document.addEventListener("DOMContentLoaded", () => {
    const signUpBtn = document.getElementById("signUpBtn");
  
    signUpBtn.addEventListener("click", async () => {
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
  
      if (!fullName || !email) {
        alert("Please enter all fields");
        return;
      }
  
      // Send OTP to backend
      const res = await fetch("http://localhost:3000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
  
      const data = await res.json();
      if (data.success) {
        const otp = prompt("Enter the OTP sent to your email:");
        if (!otp) return;
  
        const verifyRes = await fetch("http://localhost:3000/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp })
        });
  
        const verifyData = await verifyRes.json();
        if (verifyData.verified) {
          alert("Email verified successfully! 🎉");
          // Proceed with full registration here (e.g., save name & email)
        } else {
          alert("Incorrect OTP. Try again.");
        }
      } else {
        alert("Failed to send OTP. Please try again.");
      }
      console.log("Loaded email:", process.env.GMAIL_USER);

    });
  });
  