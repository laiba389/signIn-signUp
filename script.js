// Validation for Sign-Up Form
document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector("form[action='signIn.html']");
    const signInForm = document.querySelector("form");

    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            let isValid = true;
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            const email = document.getElementById("mail").value.trim();
            const password = document.getElementById("pwd").value.trim();
            const dob = document.getElementById("dob").value;
            const policy = document.getElementById("policy").checked;

            // Name validation
            if (firstName === "" || lastName === "") {
                alert("First Name and Last Name cannot be empty.");
                isValid = false;
            }

            // Email validation (Regex for a valid email format)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                isValid = false;
            }

            // Password validation (at least 1 number, 1 special char, min 6 chars)
            const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
            if (!passwordPattern.test(password)) {
                alert("Password must be at least 6 characters long, contain a number and a special character.");
                isValid = false;
            }

            // Age validation (at least 13 years old)
            const birthDate = new Date(dob);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age < 13 || isNaN(age)) {
                alert("You must be at least 13 years old to sign up.");
                isValid = false;
            }

            // Privacy Policy Agreement
            if (!policy) {
                alert("You must agree to the Privacy Policy.");
                isValid = false;
            }

            if (isValid) {
                alert("Sign-Up Successful! Redirecting...");
                signUpForm.submit(); // Submit the form if all validations pass
            }
        });
    }

    // Validation for Sign-In Form
    if (signInForm && !signUpForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let username = document.getElementById("name").value.trim();
            let password = document.getElementById("pwd").value.trim();

            if (username === "" || password === "") {
                alert("Username and Password cannot be empty.");
                return;
            }

            // Password must be the same format as in Sign-Up
            const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
            if (!passwordPattern.test(password)) {
                alert("Invalid password format. Please check your credentials.");
                return;
            }

            alert("Sign-In Successful!");
            signInForm.submit(); // Submit form if all checks pass
        });
    }
});
