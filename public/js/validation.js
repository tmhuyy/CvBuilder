const validator = require("validator");
const form = document.querySelector("#form");
const firstName = document.querySelector("#first_name");

form.addEventListener("click", function (e) {
    console.log("hello");
    checkValidator();
});

const checkValidator = function () {
    const firstNameValue = firstName.value.trim();
    console.log(validator.isEmpty(firstNameValue));
};
// const a = "";
// console.log(validator.isEmpty(a));
