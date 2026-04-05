const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // form submit rokna

    if (password.value === confirmPassword.value) {
        // Success message
        message.style.color = "green";
        message.textContent = "Registration Successful!";
        
        // optional: form reset
        form.reset();
    } else {
        // Error message
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
    }
});