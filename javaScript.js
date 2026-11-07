const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");

const submitBtn = document.getElementById("submitBtn");
const bioCounter = document.getElementById("bioCounter");
const successMessage = document.getElementById("successMessage");

// Name validation

function validateName() {
    const value = nameInput.value.trim();

    if (value === "") {
        document.getElementById("nameError").textContent ="Name is required."; return false;
    }
    document.getElementById("nameError").textContent = ""; return true;
}

// Email validation

function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        document.getElementById("emailError").textContent ="Email is required.";return false;
    }

    else if (!emailPattern.test(value)) { document.getElementById("emailError").textContent ="Enter a valid email address."; return false;
    }

    document.getElementById("emailError").textContent = "";return true;
}

// Password validation
function validatePassword() {

    const value = passwordInput.value;

    if (value === "") { document.getElementById("passwordError").textContent ="Password is required."; return false;
    }

    else if (value.length < 6) { document.getElementById("passwordError").textContent ="Password must contain at least 6 characters.";return false;
    }
    document.getElementById("passwordError").textContent = ""; return true;
}

// Bio validation
function validateBio() {

    const value = bioInput.value; bioCounter.textContent = value.length + " / 200 characters";

    if (value.trim() === "") {document.getElementById("bioError").textContent ="Bio is required.";return false;
    } document.getElementById("bioError").textContent = "";return true;
}

// Check all fields
function validateForm() {

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const bioValid = validateBio();

    submitBtn.disabled = !(
        nameValid &&
        emailValid &&
        passwordValid &&
        bioValid
    );
}

// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
bioInput.addEventListener("input", validateForm);

// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    validateForm();

    if (!submitBtn.disabled) {

        successMessage.textContent = "Registration successful!";
        form.reset();bioCounter.textContent = "0 / 200 characters";submitBtn.disabled = true;
    }
});

// Initial validation
validateForm();