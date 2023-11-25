// Define the available codes and their corresponding rewards
const codesData = {
    "1234": 100,
    "Code": 200,
    "jjsal1234": 300,
    "Coding": 300,
    "L3m0n": 300,
    "F5999": 300,
    "Money": 300,
    "Tycoon": 300,
    // Add more codes and rewards as needed
};

// Function to check and apply a code
function applyCode(code) {
    const reward = codesData[code];
    if (reward !== undefined) {
        // Code is valid, apply the reward
        money += reward;
        alert(`Code "${code}" applied! You earned $${reward}.`);
        updateDisplay();
    } else {
        // Code is invalid
        alert(`Invalid code: "${code}".`);
    }
}
