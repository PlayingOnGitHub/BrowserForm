const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submit");

let showError = false;

function createListeners() {
    email.addEventListener("focusout", checkEmail, true);
    country.addEventListener("focusout", checkCountry, true);
    zipCode.addEventListener("focusout", checkZipCode, true);
    password.addEventListener("focusout", checkPassword, true);
    confirmPassword.addEventListener("focusout", checkConfirmPassword, true);
    submitButton.addEventListener("click", checkData, true);
}

function checkEmail() {
    if (email.validity.typeMismatch || email.validity.valueMissing) {
        email.className = "error";
        email.setCustomValidity("Please enter a valid email");
        email.reportValidity();
        showError == true;
        return false;
    }
    else {
        email.setCustomValidity("");
        email.className = "";
        return true;
    }
}

function checkCountry() {
    if (country.validity.valueMissing) {
        country.className = "";
        country.setCustomValidity("");
        country.className = "error";
        country.setCustomValidity("Please add your country in the correct format");
        country.reportValidity();
        return false;
    }
    else {
        country.className = "";
        country.setCustomValidity("");
        return true;
    }
}

function checkZipCode() {
    if (isNaN(+zipCode.value)) {
        zipCode.setCustomValidity("Enter a zip code that is numbers only");
        zipCode.reportValidity();
        return false;
    }
    else if (zipCode.validity.tooShort) {
        zipCode.className = "error";
        zipCode.setCustomValidity("Enter a 5 digit zip code");
        zipCode.reportValidity();
        return false;
    }
    else if (zipCode.validity.tooLong) {
        zipCode.className = "error";
        zipCode.setCustomValidity("YOU ARE FAKE");
        zipCode.reportValidity();
        return false;
    }
    else {
        zipCode.className = "";
        zipCode.setCustomValidity("");
        return true;
    }
}

function checkPassword() {
    if (password.validity.patternMismatch) {
        password.className = "error";
        password.setCustomValidity("Enter a password that is 8 characters long, 1 letter, 1 number, and also use a special symbol");
        password.reportValidity();
        return false;
    }
    else {
        password.className = "";
        password.setCustomValidity("");
        return true;
    }
    checkPasswords();
}

function checkConfirmPassword() {
    if (confirmPassword.validity.patternMismatch) {
        confirmPassword.className = "error";
        confirmPassword.setCustomValidity("Enter a password that is 8 characters long, 1 letter, 1 number, and also use a special symbol");
        confirmPassword.reportValidity();
        return false;
    }
    else {
        confirmPassword.className = "";
        confirmPassword.setCustomValidity("");
        return true;
    }
    checkPasswords();
}

function checkPasswords() {
    if (password.value == confirmPassword.value) {
        confirmPassword.setCustomValidity("");
        return true;
    }
    else if (confirmPassword.value.length == 0) {
        confirmPassword.setCustomValidity("");
        return false;
    }
    else {
        console.log("we not match");
        confirmPassword.className = "error";
        password.className = "error";
        confirmPassword.setCustomValidity("ERROR. Passwords don't match. Now you have to type it all over again :/");
        confirmPassword.reportValidity();
        confirmPassword.value = "";
        password.value = "";
        return false;
    }
}

function checkData(e) {
    e.preventDefault();
    if (checkEmail() &&
        checkCountry() &&
        checkZipCode() &&
        checkPassword() &&
        checkConfirmPassword() &&
        checkPasswords()) 
        {
            console.log("Hi five");
            let highFive = document.getElementById("highFive");
            highFive.style.display = "block";
        } else {
            console.log("FAIL");
        }
}

function init() {
    createListeners();
}

init();