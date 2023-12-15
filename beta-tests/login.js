// login.js

function attemptLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication logic (read from the hosted text file)
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
                if (username === 'user1' && password === '1234') {
                    document.getElementById("loginStatus").innerText = "Admin login successful!";
                } else {
                    document.getElementById("loginStatus").innerText = "Login successful!";
                }

                // Store user information in localStorage
                localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));
            } else {
                document.getElementById("loginStatus").innerText = "Invalid credentials. Please try again.";
            }
        })
        .catch(error => {
            console.error('Error reading GSug5.txt:', error);
        });
}

// Check for stored login information on page load
window.onload = function () {
    const storedUser = localStorage.getItem('loggedInUser');

    if (storedUser) {
        const { username, password } = JSON.parse(storedUser);
        authenticateUser(username, password);
    }
};
