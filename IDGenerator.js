function generateRandomID() {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var id = '';
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if (i < 3) {
            id += '-';
        }
    }
    console.log(id);
    return id;
}

// Generate a random ID and output it to the console initially
generateRandomID();

// Set up an interval to generate a new random ID every 15 seconds
setInterval(function() {
    generateRandomID();
}, 15000); // 15 seconds in milliseconds
