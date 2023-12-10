// Import the necessary functions from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Function to check if the user is logged in and email is verified
onAuthStateChanged(getAuth(), (user) => {
  const dashboardContainer = document.getElementById('dashboard-container');
  const userEmailElement = document.getElementById('user-email');

  if (user && user.emailVerified) {
    // User is logged in and email is verified
    dashboardContainer.style.display = 'block';
    userEmailElement.textContent = `Email: ${user.email}`;
  } else if (user) {
    // User is logged in but email is not verified, redirect to index.html
    window.location.replace('index.html');
  } else {
    // User is not logged in, redirect to index.html
    window.location.replace('index.html');
  }
});

// Function to handle logout
window.logout = async function () {
  try {
    await signOut(getAuth());
    // Redirect to the login page after logout
    window.location.replace('index.html');
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};
