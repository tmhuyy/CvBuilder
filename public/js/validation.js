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

const blank = "Cannot be blank";
const invalid = "Invalid email";

const checkValidator = function () {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    checkEmpty(firstNameValue, firstName, blank);
    checkEmpty(lastNameValue, lastName, blank);
    checkEmpty(addressValue, address, blank);
    checkEmpty(phoneNumberValue, phoneNumber, blank);
    checkEmail(emailValue, email, blank, invalid);
};

const checkEmpty = function (value, inputValue, message) {
    if (value === "") {
        setError(inputValue, message);
    } else {
        setSuccess(inputValue);
    }
};

const checkEmail = function (value, inputValue, message1, message2) {
    if (value === "") {
        setError(inputValue, message1);
    } else if (!isEmail(value)) {
        setError(inputValue, message2);
    } else {
        setSuccess(inputValue);
    }
};

const isEmail = function (email) {
    const condition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return condition.test(email);
};

const setError = function (input, message) {
    const formGroup = input.parentElement; // .form-group
    const small = formGroup.querySelector("small");
    formGroup.className = "form-group error";
    small.innerText = message;
};

const setSuccess = function (input) {
    const formGroup = input.parentElement; // .form-group
    formGroup.className = "form-group success";
};
