// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCDOpWHWOvlu8V-WDZ1F74tsC9AEWEXCE8",
  authDomain: "nirdeshika-login.firebaseapp.com",
  projectId: "nirdeshika-login",
  storageBucket: "nirdeshika-login.firebasestorage.app",
  messagingSenderId: "799455466518",
  appId: "1:799455466518:web:c1e0dd063ae48e4c649137",
  measurementId: "G-BWYBR1PZ60"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleBtn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.disabled = true;
  loginBtn.innerText = "Logging in...";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      document.cookie = `token=${data.token}; path=/; max-age=3600`; // Sync across 127.0.0.1 ports
      alert("Login successful!");
      window.location.href = "index.html"; // change to your actual dashboard or home
    } else {
      loginBtn.disabled = false;
      loginBtn.innerText = "Login";
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    loginBtn.disabled = false;
    loginBtn.innerText = "Login";
    alert("Connection error. Is the server running?");
  }
});

//document.getElementById("googleBtn").addEventListener("click", () => {
//  const provider = new firebase.auth.GoogleAuthProvider();
//  const auth = firebase.auth();
//
//  auth.signInWithPopup(provider)
//    .then((result) => {
//      const user = result.user;
//      console.log("User signed in:", user);
//      alert(`Welcome ${user.displayName}!`);
//    })
//    .catch((error) => {
//      console.error("Error during sign-in:", error);
//      alert("Google Sign-In failed. Check console for details.");
//    });
//});
