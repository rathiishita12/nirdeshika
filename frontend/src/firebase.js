import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDOpWHWOvlu8V-WDZ1F74tsC9AEWEXCE8",
    authDomain: "nirdeshika-login.firebaseapp.com",
    projectId: "nirdeshika-login",
    storageBucket: "nirdeshika-login.appspot.com",
    messagingSenderId: "799455466518",
    appId: "1:799455466518:web:c1e0dd063ae48e4c649137"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);