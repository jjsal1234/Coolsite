// debug.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
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
    adminPanel.style.display = 'none'; // Initially hidden

    // Password for the admin panel
    var adminPassword = 'password123';

    // Add some content to the admin panel
    adminPanel.innerHTML = `
        <h2>Admin Panel</h2>
        <label for="panelPassword">Password:</label>
        <input type="password" id="panelPassword">
        <button onclick="openPanel()">Open Panel</button>
        <button onclick="showPanel()">Show Panel</button>
        <button onclick="simulateCriticalError()">Simulate Critical Error</button>
        <button onclick="simulateWarning()">Simulate Warning</button>
        <button onclick="simulateInformation()">Simulate Information</button>
    `;

    // Append the admin panel to the body
    document.body.appendChild(adminPanel);

    // Function to display messages on the page
    function displayDebugMessage(message) {
        var debugMessage = document.getElementById('debugMessage');
        if (debugMessage) {
            debugMessage.innerText = message;
        }
    }

    // Function to open the admin panel
    window.openPanel = function () {
        var passwordInput = document.getElementById('panelPassword');
        if (passwordInput.value === adminPassword) {
            adminPanel.style.display = 'block';
            passwordInput.value = ''; // Clear the password field
        } else {
            alert('Incorrect password!');
        }
    };

    // Function to show the admin panel without a password
    window.showPanel = function () {
        adminPanel.style.display = 'block';
    };

    // Simulate critical error
    function simulateCriticalError() {
        displayDebugMessage("Debug Mode: Critical Error!");
    }

    // Simulate warning
    function simulateWarning() {
        displayDebugMessage("Debug Mode: Warning - This is just a simulation.");
    }

    // Simulate information
    function simulateInformation() {
        displayDebugMessage("Debug Mode: Information - This is for testing purposes only.");
    }
});
