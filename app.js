// Your Firebase configuration
var firebaseConfig = {
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

// Function to handle login
function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessageContainer = document.getElementById('error-message');

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User logged in successfully
      var user = userCredential.user;
      console.log("User logged in:", user);
      alert("User logged in successfully");
      // Redirect or perform any other actions on successful login

      // Clear any previous error messages
      errorMessageContainer.innerHTML = '';
    })
    .catch((error) => {
      // Handle errors
      var errorMessage = error.message;
      console.error("Login error:", errorMessage);
      alert("Login error: " + errorMessage);

      // Display error message in red
      errorMessageContainer.innerHTML = errorMessage;
    });
}
