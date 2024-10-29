document.addEventListener("DOMContentLoaded", function() {

    // Function to check if a username is valid
    function isValidUsername(username) {
        // Check if username contains only lowercase letters, underscores, numbers, and @ symbol
        return /^[a-zA-Z0-9_@]+$/.test(username); // Include uppercase letters in username validation
    }

    // Function to check if a username exists
    function isUsernameExists(username) {
        return localStorage.getItem(username) !== null;
    }

    // Login form submission
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("loginUsername").value;
            var password = document.getElementById("loginPassword").value;
            var userData = JSON.parse(localStorage.getItem(username));

            // Clear previous error messages
            document.getElementById("loginUsernameError").innerHTML = "";
            document.getElementById("loginPasswordError").innerHTML = "";
            document.getElementById("loginError").innerHTML = "";

            if (!isValidUsername(username)) {
                document.getElementById("loginUsernameError").innerHTML = "Invalid username format";
                return;
            }

            if (!isUsernameExists(username)) {
                document.getElementById("loginUsernameError").innerHTML = "Invalid username";
                return;
            }

            if (!userData || userData.password !== password) {
                document.getElementById("loginPasswordError").innerHTML = "Invalid password";
                return;
            }

            // Successful login
            alert("Login successful");
            window.location.href = 'camera.html'; // Redirect to camera.html after successful login
            loginForm.reset(); // Clear the form
        });
    }

    // Clear error messages when input fields are changed
    document.getElementById("loginUsername").addEventListener("input", function() {
        document.getElementById("loginUsernameError").innerHTML = "";
    });

    document.getElementById("loginPassword").addEventListener("input", function() {
        document.getElementById("loginPasswordError").innerHTML = "";
    });

});
