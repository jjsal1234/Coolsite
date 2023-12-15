// login.js

function attemptLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication logic (read from a text file hosted on GitHub)
    authenticateUser(username, password);
}

function authenticateUser(username, password) {
    // Link to the users.txt file hosted on GitHub Pages
    const usersFileURL = 'https://jjsal1234.github.io/data/random/GSug5.txt';

    // Read user credentials from the text file
    fetch(usersFileURL)
        .then(response => response.text())
        .then(data => {
            // Parse the JSON-like data
            const users = JSON.parse(data);

            // Check if the provided username exists and the password matches
            if (users.hasOwnProperty(username) && users[username] === password) {
                // Set a cookie to indicate the user is logged in
                document.cookie = "loggedIn=true; path=/";

                // Redirect to home.html
                window.location.href = "home.html";
            } else {
                document.getElementById("loginStatus").innerText = "Invalid credentials. Please try again.";
            }
        })
        .catch(error => {
            console.error('Error reading GSug5.txt:', error);
        });
}

// Check for the loggedIn cookie on page load
window.onload = function () {
    if (document.cookie.includes("loggedIn=true")) {
        // If the user is already logged in, redirect to home.html
        window.location.href = "home.html";
    }
};
