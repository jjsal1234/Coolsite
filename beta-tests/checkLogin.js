// Check for stored login information on page load
window.onload = function () {
    const storedUser = localStorage.getItem('loggedInUser');

    if (!storedUser) {
        // Redirect to the login page if not logged in
        window.location.href = 'login.html';
    }
};
