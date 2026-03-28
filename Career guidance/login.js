// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
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
const auth=getAuth(app);
auth.languageCode='en'
const provider=new GoogleAuthProvider();

const googleLogin=document.getElementById("googleBtn");
googleLogin.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="index.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Logging in with:", username, password);
  alert("Login button clicked! (You can add backend auth here.)");
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
