document.addEventListener("DOMContentLoaded", function() {

    // Function to check if a username is valid
    function isValidUsername(username) {
        // Check if username contains only lowercase letters, underscores, numbers, and @ symbol
        return /^[a-z0-9_@]+$/.test(username);
    }

    // Function to check if a username already exists
    function isUsernameExists(username) {
        return localStorage.getItem(username) !== null;
    }

    // Register form submission
    var registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            var name = document.getElementById("registerName").value;
            var username = document.getElementById("registerUsername").value;
            var password = document.getElementById("registerPassword").value;
            var dob = document.getElementById("registerDob").value;
            var email = document.getElementById("registerEmail").value;

            // Password validation
            var passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
            if (!passwordRegex.test(password)) {
                document.getElementById("passwordError").innerHTML = "Password must be at least\
                6 characters long and contain special characters";
                return;
            } else {
                document.getElementById("passwordError").innerHTML = "";
            }

            // Check if the username is valid
            if (!isValidUsername(username)) {
                document.getElementById("usernameError").innerHTML = "Username can only contain\
                lowercase letters, underscores, numbers, and @ symbol";
                document.getElementById("usernameAvailability").style.color = "red";
                return;
            } else {
                document.getElementById("usernameAvailability").innerHTML = "";
            }

            // Check if the username already exists
            if (isUsernameExists(username)) {
                document.getElementById("usernameAvailability").innerHTML = "Username already exists";
                document.getElementById("usernameAvailability").style.color = "red";
                return;
            } else {
                document.getElementById("usernameAvailability").innerHTML = "Username is available";
                document.getElementById("usernameAvailability").style.color = "green";
            }

            // Store data in local storage
            localStorage.setItem(username, JSON.stringify({ name: name, password: password, dob: dob, email: email }));
            alert("Registration successful. You can now login.");
            registerForm.reset(); // Reset the form
            document.getElementById("registerError").innerHTML = ""; // Clear any previous error message
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Username input field validation
    var registerUsernameInput = document.getElementById("registerUsername");
    if (registerUsernameInput) {
        registerUsernameInput.addEventListener("input", function() {
            var username = this.value;
            if (isValidUsername(username)) {
                if (isUsernameExists(username)) {
                    document.getElementById("usernameAvailability").innerHTML = "Username already exists";
                    document.getElementById("usernameAvailability").style.color = "red";
                } else {
                    document.getElementById("usernameAvailability").innerHTML = "Username is available";
                    document.getElementById("usernameAvailability").style.color = "green";
                }
            } else {
                document.getElementById("usernameAvailability").innerHTML = "Username can only contain lowercase letters, underscores, numbers, and @ symbol";
                document.getElementById("usernameAvailability").style.color = "red";
            }
        });
    }

});
