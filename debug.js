// debug.js

// Create a simulated admin panel
var adminPanel = document.createElement('div');
adminPanel.style.position = 'fixed';
adminPanel.style.top = '0';
adminPanel.style.left = '0';
adminPanel.style.background = 'rgba(0, 0, 0, 0.8)';
adminPanel.style.color = 'white';
adminPanel.style.padding = '10px';
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

// Function to display messages on the page
function displayDebugMessage(message) {
    var debugMessage = document.getElementById('debugMessage');
    if (debugMessage) {
        debugMessage.innerText = message;
    }
}

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
