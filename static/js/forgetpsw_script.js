document.addEventListener("DOMContentLoaded", function() {
    // Function to check if a username is valid
    function isValidUsername(username) {
        // Check if username contains only lowercase letters, underscores, and numbers
        return /^[a-z0-9_@]+$/.test(username);
    }

    // Function to check if a username already exists
    function isUsernameExists(username) {
        return localStorage.getItem(username) !== null;
    }

    // Forgot password form submission
    var forgotPasswordForm = document.getElementById("forgotPasswordForm");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("forgotUsername").value;
            var dob = document.getElementById("forgotDob").value;
            var newPassword = document.getElementById("newPassword").value;

            // Retrieve user data from local storage
            var userData = JSON.parse(localStorage.getItem(username));

            // Clear previous error messages
            document.getElementById("forgotUsernameError").innerHTML = "";
            document.getElementById("forgotDobError").innerHTML = "";
            document.getElementById("newPasswordError").innerHTML = "";

            if (!username.trim()) {
                document.getElementById("forgotUsernameError").innerHTML = "Username cannot be empty";
                return;
            } else if (!isValidUsername(username)) {
                document.getElementById("forgotUsernameError").innerHTML = "Invalid username format";
                return;
            }

            if (!dob.trim()) {
                document.getElementById("forgotDobError").innerHTML = "Date of Birth cannot be empty";
                return;
            }

            if (!newPassword.trim()) {
                document.getElementById("newPasswordError").innerHTML = "New Password cannot be empty";
                return;
            }

            if (!isUsernameExists(username)) {
                document.getElementById("forgotUsernameError").innerHTML = "Username does not exist";
                return;
            }

            if (!userData || userData.dob !== dob) {
                document.getElementById("forgotDobError").innerHTML = "Date of Birth is incorrect";
                return;
            }

            // Password validation
            var passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
            if (!passwordRegex.test(newPassword)) {
                document.getElementById("newPasswordError").innerHTML = "Password must be at least 6 characters long and contain a special character";
                return;
            }

            // Update password in local storage
            userData.password = newPassword;
            localStorage.setItem(username, JSON.stringify(userData));
            alert("Password reset successful. You can now login with your new password.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});
