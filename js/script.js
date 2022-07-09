const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const passwordInfo = document.getElementById("password-info");
const signIn = document.getElementById("signin");
const first = document.getElementById("first");
const last = document.getElementById("last");
const myEmail = document.getElementById("myemail");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('focus', passwordInformation);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

function passwordInformation() {
    passwordInfo.innerHTML = "Password must be at least 8 characters"; 
    passwordInfo.style.color = "#555";  
}

signIn.addEventListener('click', signinSuccess);

function signinSuccess(e) {
    e.preventDefault();
    
    const passwordValue = document.getElementById("password").value;

    if ((firstName.value && lastName.value && email.value.match(mailFormat) && password.value) && (passwordValue.length >= 8)) {
        window.location.href = 'test.html';
    } 
     
    if (!(firstName.value)) {
        firstNameInputError();
    } else {
        firstName.style.borderColor = "#ced4da";
        const firstNameInfo = document.getElementById("first-name-info");
        firstNameInfo.innerHTML = "";
        first.classList.remove("icon-display"); 
    }
     
    if (!(lastName.value)) {
        lastNameInputError();
    } else {
        lastName.style.borderColor = "#ced4da";
        const lastNameInfo = document.getElementById("last-name-info");
        lastNameInfo.innerHTML = "";
        last.classList.remove("icon-display"); 
    }
     
    if (!(email.value)) {
        emailInputError();
    } else if (!(email.value.match(mailFormat))) {
        const emailInfo = document.getElementById("email-info");
        emailInfo.innerHTML = "This is not a valid email address";
    } else {
        email.style.borderColor = "#ced4da";
        const emailInfo = document.getElementById("email-info");
        emailInfo.innerHTML = "";
        myEmail.classList.remove("icon-display"); 
    }

    if (!(password.value)) {
        passwordInputError();
    } else if (!(passwordValue.length >= 8)) {
        passwordLengthError();
    } else {
        password.style.borderColor = "#ced4da";
    }
}

firstNameInputError = () => {
    const firstNameInfo = document.getElementById("first-name-info");
    firstName.style.borderColor = "red";
    firstNameInfo.innerHTML = "First Name must be filled"; 
    first.classList.add("icon-display"); 
}

lastNameInputError = () => {
    const lastNameInfo = document.getElementById("last-name-info");
    lastName.style.borderColor = "red";
    lastNameInfo.innerHTML = "Last Name must be filled";
    last.classList.add("icon-display"); 
}

emailInputError = () => {
    const emailInfo = document.getElementById("email-info");
    email.style.borderColor = "red"; 
    emailInfo.innerHTML = "Email must be filled"; 
    myEmail.classList.add("icon-display"); 
}

passwordInputError = () => { 
    password.style.borderColor = "red";
    passwordInfo.innerHTML = "Password must be filled";
    passwordInfo.style.color = "red";
}

passwordLengthError = () => {
    passwordInfo.innerHTML = "Password cannot be less than 8 characters";
    passwordInfo.style.color = "red";
}