// Import the necessary functions from the Firebase SDK
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessageContainer = document.getElementById('error-message');

  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);

    // User logged in successfully
    console.log("User logged in:", auth.currentUser);
    alert("User logged in successfully");

    // Redirect or perform any other actions on successful login

    // Clear any previous error messages
    errorMessageContainer.innerHTML = '';
  } catch (error) {
    // Handle errors
    const errorMessage = error.message;
    console.error("Login error:", errorMessage);
    alert("Login error: " + errorMessage);

    // Display error message in red
    errorMessageContainer.innerHTML = errorMessage;
  }
};