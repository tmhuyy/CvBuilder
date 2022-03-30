const form = document.querySelector("#form");

// TODO check empty
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const address = document.querySelector("#address");
const phoneNumber = document.querySelector("#phone_number");

// TODO check email
const email = document.querySelector("#email");

form.addEventListener("click", function (e) {
    console.log("hello");
    checkValidator();
});

const checkValidator = function () {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = firstName.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
};

const checkEmpty = function (value, message) {
    if (value === "") {
        setError(value, message);
    } else {
    }
};

const checkEmail = function (value) {};

const setError = function (input, message) {
    const formGroup = input.parentElement; // .form-group
    const small = formGroup.querySelector("small");
    formGroup.className = "form-group error";
    small.innerText = message;
};

const setSuccess = function (input) {
    const formGroup = input.parentElement; // .form-group
    formGroup.className = "form-control success";
};
