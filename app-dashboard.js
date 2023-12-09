import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Check user authentication state
auth.onAuthStateChanged((user) => {
    const userInfoSpan = document.getElementById('user-info');
    if (user) {
        userInfoSpan.textContent = `${user.displayName || user.email}`;
    } else {
        // Redirect to the login page or handle the situation as needed
        window.location.href = 'index.html';
    }
});

// Logout function
function logout() {
    signOut(auth).then(() => {
        // Redirect to the login page after logout
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}
