function register() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username is not empty
    if (username.trim() === "") {
        alert("Username cannot be empty.");
        return;
    }

    // Add the user to the list
    addUser(username);

    // Optional: You may want to store the user data securely using a backend service.
}

function addUser(username) {
    // Get the user list element
    var userList = document.getElementById("userList");

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(username));

    // Append the list item to the user list
    userList.appendChild(listItem);
}
