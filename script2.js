// Function to open the sign-in popup
function openSignInPopup() {
    document.getElementById("signInPopup").style.display = "block";
}

// Function to close the sign-in popup
function closeSignInPopup() {
    document.getElementById("signInPopup").style.display = "none";
}

var currentUser = null;

function signIn() {
    var username = document.getElementById('username').value;
    // Perform authentication logic, set currentUser if authentication is successful

    // For example:
    if (authenticationSuccessful(username)) {
        currentUser = username;
        document.getElementById('signInPopup').style.display = 'none';
        updateProfileButton();
    } else {
        alert('Authentication failed. Please try again.');
    }
}

function updateProfileButton() {
    var profileButton = document.getElementById('profileButton');
    if (currentUser) {
        // If a user is signed in, display the profile button
        profileButton.style.display = 'block';
        document.getElementById('profileText').innerText = currentUser;
    } else {
        // If no user is signed in, hide the profile button
        profileButton.style.display = 'none';
    }
}

// Function to check if a user is signed in
function isSignedIn() {
    return localStorage.getItem("signedInUser") !== null;
}

// Function to update the visibility of sign-in and profile buttons
function updateSignInStatus() {
    var profileButton = document.getElementById("profileButton");
    var signInButton = document.getElementById("signInButton");

    if (profileButton && signInButton) {
        if (userIsSignedIn()) {
            // User is signed in
            var username = getSignedInUsername();
            if (profileButton.style) {
                profileButton.style.display = "block";
            }
            if (profileButton.innerHTML) {
                profileButton.innerHTML = "Welcome, " + username + "!";
            }
            if (signInButton.style) {
                signInButton.style.display = "none";
            }
        } else {
            // User is not signed in
            if (profileButton.style) {
                profileButton.style.display = "none";
            }
            if (signInButton.style) {
                signInButton.style.display = "block";
            }
        }
    } else {
        console.error("profileButton or signInButton is null. Check your HTML structure.");
    }
}

// Function to update the profile text next to the profile button
function updateProfileText(accountInfo) {
    const profileText = document.getElementById("profileText");
    const profileButton = document.getElementById("profileButton");

    if (accountInfo) {
        const text = accountInfo.username + (accountInfo.verified ? " <img src='https://cdn.discordapp.com/attachments/1061160749524860949/1176632201761271848/Untitled4_20231121141547.png?ex=656f9321&is=655d1e21&hm=b8f037c74b23f954c529858cb775a6a5b93cbe6bc7625a1e9714aac98f5a3402&' alt='Verified' style='width: 20px; height: 20px; margin-left: 5px; margin-top: -3px;'/>" : "");
        profileText.innerHTML = text;
        profileText.style.display = "inline-block";
        profileButton.style.marginRight = "10px"; // Add margin to separate text from button
    } else {
        profileText.style.display = "none";
        profileButton.style.marginRight = "0"; // Reset margin when there's no text
    }
}

// Function to open the profile popup
function openProfilePopup() {
    const signedInUser = localStorage.getItem("signedInUser");

    if (signedInUser) {
        const accountInfo = getAccountInfo(signedInUser);
        document.getElementById("profileUsername").innerText = accountInfo.username;
        document.getElementById("profileVerified").innerText = accountInfo.verified ? "Verified: Yes" : "Verified: No";
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
        const usernameLink = document.createElement("a");

        // Add an event listener to open the profile popup when clicking on the username
        usernameLink.textContent = account.username;

        usernameLink.href = "#";  // You can replace this with the link to the user's profile

        // Set text color to white
        usernameLink.style.color = "white";

        // Remove underline
        usernameLink.style.textDecoration = "none";

        // Increase font size
        usernameLink.style.fontSize = "18px";

        // Add an event listener to open the profile popup when clicking on the username
        usernameLink.addEventListener("click", function () {
            openUserProfile(account.username, account.verified);
        });

        listItem.appendChild(usernameLink);

        // Add a checkmark for verified accounts on the right side
        if (account.verified) {
            const checkmarkImg = document.createElement("img");
            checkmarkImg.src = "https://cdn.discordapp.com/attachments/1061160749524860949/1176632201761271848/Untitled4_20231121141547.png?ex=656f9321&is=655d1e21&hm=b8f037c74b23f954c529858cb775a6a5b93cbe6bc7625a1e9714aac98f5a3402&";
            checkmarkImg.alt = "Verified";
            checkmarkImg.style.width = "15px";
            checkmarkImg.style.height = "15px";
            checkmarkImg.style.marginLeft = "5px"; // Adjust margin for spacing
            listItem.appendChild(checkmarkImg);
        }

        leaderboardList.appendChild(listItem);
    });
}

// Function to open the user profile popup
function openUserProfile(username, isVerified) {
    const accountInfo = getAccountInfo(username);

    if (accountInfo) {
        document.getElementById("profileUsername").innerText = accountInfo.username;
        document.getElementById("profileVerified").innerText = accountInfo.verified ? "Verified: Yes" : "Verified: No";
        document.getElementById("profilePopup").style.display = "block";
    }
}

// Check sign-in status and update buttons when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateSignInStatus();
    updateLeaderboard();
});
