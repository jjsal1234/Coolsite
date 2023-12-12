// debugpass.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Create a password prompt
    var passwordPrompt = document.createElement('div');
    passwordPrompt.style.position = 'fixed';
    passwordPrompt.style.top = '50%';
    passwordPrompt.style.left = '50%';
    passwordPrompt.style.transform = 'translate(-50%, -50%)';
    passwordPrompt.style.background = 'rgba(0, 0, 0, 0.8)';
    passwordPrompt.style.color = 'white';
    passwordPrompt.style.padding = '20px';
    passwordPrompt.style.zIndex = '9999';

    // Password for the password prompt
    var password = 'Password123';

    // Add some content to the password prompt
    passwordPrompt.innerHTML = `
        <h2>Password Prompt</h2>
        <label for="passwordInput">Enter Password:</label>
        <input type="password" id="passwordInput">
        <br><br>
        <button onclick="checkPassword()">Submit</button>
    `;

    // Append the password prompt to the body
    document.body.appendChild(passwordPrompt);

    // Function to check the entered password
    window.checkPassword = function () {
        var passwordInput = document.getElementById('passwordInput');
        if (passwordInput.value === password) {
            // Password is correct, close the password prompt
            document.body.removeChild(passwordPrompt);
            // Open the admin panel
            showPanel();
        } else {
            alert('Incorrect password!');
        }
    };

    // Function to show the admin panel without a password
    function showPanel() {
        // Create a simulated admin panel
        var adminPanel = document.createElement('div');
        adminPanel.style.position = 'fixed';
        adminPanel.style.top = '50%';
        adminPanel.style.left = '50%';
        adminPanel.style.transform = 'translate(-50%, -50%)';
        adminPanel.style.background = 'rgba(0, 0, 0, 0.8)';
        adminPanel.style.color = 'white';
        adminPanel.style.padding = '20px';
        adminPanel.style.zIndex = '9999';

        // Add some content to the admin panel
        adminPanel.innerHTML = `
            <h2>Admin Panel</h2>
            <button onclick="simulateCriticalError()">Simulate Critical Error</button>
            <button onclick="simulateWarning()">Simulate Warning</button>
            <button onclick="simulateInformation()">Simulate Information</button>
        `;

        // Append the admin panel to the body
        document.body.appendChild(adminPanel);
    }

    // Simulate critical error
    function simulateCriticalError() {
        alert("Debug Mode: Critical Error!");
    }

    // Simulate warning
    function simulateWarning() {
        alert("Debug Mode: Warning - This is just a simulation.");
    }

    // Simulate information
    function simulateInformation() {
        alert("Debug Mode: Information - This is for testing purposes only.");
    }
});
