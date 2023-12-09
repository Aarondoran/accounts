import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDllgiG0OOU97Y_p-udHEK5yyV8hkjtY_o",
    authDomain: "aarondoran-c1118.firebaseapp.com",
    databaseURL: "https://aarondoran-c1118-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aarondoran-c1118",
    storageBucket: "aarondoran-c1118.appspot.com",
    messagingSenderId: "893503265416",
    appId: "1:893503265416:web:f71fe6bc73aca71d141d3d",
    measurementId: "G-2SV0NB7YR5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Signup function
function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
        });
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // No need to handle user here; onAuthStateChanged will be triggered
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
        });
}