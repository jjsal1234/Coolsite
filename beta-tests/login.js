// login.js

function attemptLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform authentication logic (read from the provided users.txt file)
    authenticateUser(username, password);
}

function authenticateUser(username, password) {
    // Link to the users.txt file hosted on GitHub Pages
    const usersFileURL = 'https://jjsal1234.github.io/Coolsite/accounts/users.txt';

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
            } else {
                document.getElementById("loginStatus").innerText = "Invalid credentials. Please try again.";
            }
        })
        .catch(error => {
            console.error('Error reading users.txt:', error);
        });
}
