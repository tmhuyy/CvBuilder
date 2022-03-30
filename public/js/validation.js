const form = document.querySelector("#form");

// TODO check empty
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const address = document.querySelector("#address");

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

const checkEmpty = function (value) {};

const checkEmail = function (value) {};

const setError = function (input, message) {
    const formGroup = input.parentElement; // .form-group
    const small = formGroup.querySelector("small");
    formGroup.className = "form-group error";
    small.innerText = message;
};
