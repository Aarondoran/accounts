  alert("Login function called");
// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxe-9gU4ZqXfq3C2WYxD3nJjbDnNaLZE",
  authDomain: "accounttest-9455c.firebaseapp.com",
  projectId: "accounttest-9455c",
  storageBucket: "accounttest-9455c.appspot.com",
  messagingSenderId: "1007166331537",
  appId: "1:1007166331537:web:fd78772438dc2e0a723d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Function to handle login
window.login = async function () {
  alert("clicked");
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessageContainerLogin = document.getElementById('error-message-login');

  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);

    // Check if the user's email is verified
    if (auth.currentUser && auth.currentUser.emailVerified) {
      // User logged in successfully and email is verified
      alert("User logged in successfully");
      // Redirect to the dashboard after successful login
      window.location.replace('dashboard.html');
    } else {
      // User's email is not verified, inform the user
      alert("Please verify your email before accessing the dashboard.");
      // Redirect to the login page
      window.location.replace('index.html');
    }

    // Clear any previous error messages
    errorMessageContainerLogin.innerHTML = '';
  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;

    // Display error message in red
    errorMessageContainerLogin.innerHTML = errorMessage;

    // Handle specific error codes
    switch (errorCode) {
      case "auth/invalid-email":
        alert("Invalid email address");
        break;
      case "auth/wrong-password":
        alert("Wrong password");
        break;
      // Add more cases for other error codes as needed
      default:
        alert(`Login error: ${errorMessage}`);
    }
  }
};

// Function to handle user registration
window.register = async function () {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const errorMessageContainerRegister = document.getElementById('error-message-register');

  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Send email verification
    await sendEmailVerification(auth.currentUser);

    // Inform the user to check their email for verification
    alert("User registered successfully. Please check your email for verification.");

    // Redirect to the login page after successful registration
    window.location.replace('index.html');

    // Clear any previous error messages
    errorMessageContainerRegister.innerHTML = '';
  } catch (error) {
    // Handle errors
    const errorCode = error.code;
    const errorMessage = error.message;

    // Display error message in red
    errorMessageContainerRegister.innerHTML = errorMessage;

    // Handle specific error codes
    switch (errorCode) {
      case "auth/invalid-email":
        alert("Invalid email address");
        break;
      case "auth/weak-password":
        alert("Weak password. Please choose a stronger password.");
        break;
      // Add more cases for other error codes as needed
      default:
        alert(`Registration error: ${errorMessage}`);
    }
  }
};
