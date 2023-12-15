// Function to open the sign-in popup
function openSignInPopup() {
    document.getElementById("signInPopup").style.display = "block";
}

// Function to close the sign-in popup
function closeSignInPopup() {
    document.getElementById("signInPopup").style.display = "none";
}

// Function to sign in
function signIn() {
    const username = document.getElementById("username").value;
    const password = prompt("Please enter your password"); // Simple password prompt (replace with a more secure method)

    const accountInfo = getAccountInfo(username);

    if (accountInfo && !accountInfo.banned && checkCredentials(username, password)) {
        alert("Sign-in successful!");
        closeSignInPopup();
        openProfilePopup(username);
        // Set a cookie or use localStorage to persist the sign-in state
        localStorage.setItem("signedInUser", username);
        updateSignInStatus();
        updateLeaderboard();
    } else if (accountInfo && accountInfo.banned) {
        window.location.href = "https://jjsal1234.github.io/Coolsite/banned";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

// Function to check if a user is signed in
function isSignedIn() {
    return localStorage.getItem("signedInUser") !== null;
}

// Function to update the visibility of sign-in and profile buttons
function updateSignInStatus() {
    const signInButton = document.getElementById("signInButton");
    const profileButton = document.getElementById("profileButton");
    const profileText = document.getElementById("profileText");

    if (isSignedIn()) {
        signInButton.style.display = "none";
        profileButton.style.display = "inline-block";
        profileText.textContent = `Hello, ${localStorage.getItem("signedInUser")} `;
        if (getAccountInfo(localStorage.getItem("signedInUser")).verified) {
            const checkmarkImg = document.createElement("img");
            checkmarkImg.src = "https://cdn.discordapp.com/attachments/1061160749524860949/1176632201761271848/Untitled4_20231121141547.png?ex=656f9321&is=655d1e21&hm=b8f037c74b23f954c529858cb775a6a5b93cbe6bc7625a1e9714aac98f5a3402&";
            checkmarkImg.alt = "Verified";
            checkmarkImg.style.width = "15px";
            checkmarkImg.style.height = "15px";
            profileText.appendChild(checkmarkImg);
        }
    } else {
        signInButton.style.display = "inline-block";
        profileButton.style.display = "none";
        profileText.textContent = "";
    }
}

// Function to open the profile popup
function openProfilePopup() {
    const signedInUser = localStorage.getItem("signedInUser");

    if (signedInUser) {
        const accountInfo = getAccountInfo(signedInUser);
        document.getElementById("profileUsername").innerText = accountInfo.username;
        document.getElementById("profileVerified").innerText = accountInfo.verified ? "Yes" : "No";
        document.getElementById("profilePopup").style.display = "block";
    }
}

// Function to close the profile popup
function closeProfilePopup() {
    document.getElementById("profilePopup").style.display = "none";
}

// Function to sign out
function signOut() {
    localStorage.removeItem("signedInUser");
    closeProfilePopup();
    updateSignInStatus();
}

// Function to open the leaderboard popup
function openLeaderboardPopup() {
    document.getElementById("leaderboardPopup").style.display = "block";
}

// Function to close the leaderboard popup
function closeLeaderboardPopup() {
    document.getElementById("leaderboardPopup").style.display = "none";
}

// Function to update the leaderboard
function updateLeaderboard() {
    const leaderboardList = document.getElementById("leaderboardList");

    // Clear existing entries
    leaderboardList.innerHTML = "";

    // Iterate through accounts and add them to the leaderboard
    accounts.forEach(account => {
        const listItem = document.createElement("li");
        listItem.textContent = account.username;

        // Add a checkmark for verified accounts
        if (account.verified) {
            const checkmarkImg = document.createElement("img");
            checkmarkImg.src = "https://cdn.discordapp.com/attachments/1061160749524860949/1176632201761271848/Untitled4_20231121141547.png?ex=656f9321&is=655d1e21&hm=b8f037c74b23f954c529858cb775a6a5b93cbe6bc7625a1e9714aac98f5a3402&";
            checkmarkImg.alt = "Verified";
            checkmarkImg.style.width = "20px";
            checkmarkImg.style.height = "20px";
            listItem.appendChild(checkmarkImg);
        }

        leaderboardList.appendChild(listItem);
    });
}

// Check sign-in status and update buttons when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateSignInStatus();
    updateLeaderboard();
});
