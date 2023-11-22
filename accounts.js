// accounts.js

// Sample accounts data with the "Locked" attribute
const accounts = [
    { username: "Tester", password: "pass", verified: true, banned: false, locked: true },
    { username: "jjsal1234", password: "jacobsux1omg", verified: true, banned: false, locked: false },
    { username: "Skeleton", password: "DfcKyt", verified: true, banned: false, locked: false },
    { username: "Cow", password: "HsdjaHjdJ", verified: false, banned: false, locked: false },
    // Add more accounts as needed
];

// Function to get account information by username
function getAccountInfo(username) {
    return accounts.find(account => account.username === username);
}

// Function to check credentials
function checkCredentials(username, enteredPassword) {
    const accountInfo = getAccountInfo(username);
    return accountInfo && accountInfo.password === enteredPassword;
}

// Function to sign in
function signIn() {
    const username = document.getElementById("username").value;
    const password = prompt("Please enter your password"); // Simple password prompt (replace with a more secure method)

    const accountInfo = getAccountInfo(username);

    if (accountInfo) {
        if (accountInfo.banned) {
            window.location.href = "https://jjsal1234.github.io/Coolsite/banned";
        } else {
            if (accountInfo.locked) {
                alert("This account is locked. Please contact support.");
            } else {
                if (checkCredentials(username, password)) {
                    alert("Sign-in successful!");
                    closeSignInPopup();
                    openProfilePopup(username, accountInfo.verified);
                    // Set a cookie or use localStorage to persist the sign-in state
                    localStorage.setItem("signedInUser", username);
                    updateSignInStatus();
                    updateLeaderboard();
                } else {
                    alert("Incorrect username or password. Please try again.");
                }
            }
        }
    } else {
        alert("Account not found. Please try again.");
    }
}
