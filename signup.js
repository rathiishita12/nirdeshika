// login.js

document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.getElementById("signUpBtn");

  document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!fullName || !email || !password) {
      alert("Please enter all fields");
      return;
    }

    signUpBtn.disabled = true;
    signUpBtn.innerText = "Sending OTP...";

    try {
      // Send OTP to backend
      const res = await fetch("http://localhost:3000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (data.success) {
        signUpBtn.innerText = "OTP Sent!";
      const otpModal = document.getElementById("otpModal");
      const otpInput = document.getElementById("otpInput");
      const verifyOtpBtn = document.getElementById("verifyOtpBtn");
      const closeBtn = document.querySelector(".close-btn");

      otpModal.style.display = "flex";

      closeBtn.onclick = () => {
        otpModal.style.display = "none";
      };

      verifyOtpBtn.onclick = async () => {
        const otp = otpInput.value.trim();
        if (!otp) {
          alert("Please enter the OTP.");
          return;
        }

        verifyOtpBtn.disabled = true;
        verifyOtpBtn.innerText = "Verifying...";

        try {
          const verifyRes = await fetch("http://localhost:3000/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp })
          });

          const verifyData = await verifyRes.json();
          if (verifyData.verified) {
            otpModal.style.display = "none";
            alert("Email verified successfully! 🎉");

            const password = document.getElementById("password").value;
            const regRes = await fetch("http://localhost:3000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username: fullName, email, password })
            });
            const regData = await regRes.json();

            if (regRes.ok) {
              alert("Registration complete! You can now log in.");
              window.location.href = "login.html";
            } else {
              alert("Registration Error: " + regData.message);
            }
          } else {
            alert("Incorrect OTP. Try again.");
          }
        } catch (error) {
          console.error("Verification error:", error);
          alert("Connection error. Is the server running?");
        } finally {
          verifyOtpBtn.disabled = false;
          verifyOtpBtn.innerText = "Verify";
        }
      };
    } else {
      signUpBtn.disabled = false;
      signUpBtn.innerText = "Sign Up";
      alert("Failed to send OTP. Please try again.");
    }
    } catch (err) {
      console.error("Error sending OTP:", err);
      signUpBtn.disabled = false;
      signUpBtn.innerText = "Sign Up";
      alert("Connection error. Is the server running?");
    }
  });
});
