// Your Firebase configuration (reuse the existing config)
const firebaseConfig = {
  apiKey: "AIzaSyDllgiG0OOU97Y_p-udHEK5yyV8hkjtY_o",
  authDomain: "aarondoran-c1118.firebaseapp.com",
  projectId: "aarondoran-c1118",
  storageBucket: "aarondoran-c1118.appspot.com",
  messagingSenderId: "893503265416",
  appId: "1:893503265416:web:f71fe6bc73aca71d141d3d",
  measurementId: "G-2SV0NB7YR5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the currently authenticated user
const user = firebase.auth().currentUser;

// Display the user's email in the dashboard
document.getElementById('user-email').innerText = user.email;

// Function to send a password reset email
function sendPasswordResetEmail() {
  firebase.auth().sendPasswordResetEmail(user.email)
    .then(() => {
      alert("Password reset email sent. Check your inbox.");
    })
    .catch((error) => {
      alert(`Error sending password reset email: ${error.message}`);
    });
}

// Function to change user email
function changeEmail() {
  const newEmail = prompt("Enter your new email:");

  if (newEmail) {
    user.updateEmail(newEmail)
      .then(() => {
        alert("Email updated successfully. Check your new email for verification.");
      })
      .catch((error) => {
        alert(`Error updating email: ${error.message}`);
      });
  }
}

// Function to handle user logout
function logout() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully.");
      // Redirect to the login page after logout
      window.location.replace('index.html');
    })
    .catch((error) => {
      alert(`Error logging out: ${error.message}`);
    });
}
