const buttonField1 = document.querySelector("#next-1");
const buttonField2 = document.querySelector("#next-2");
const buttonField3 = document.querySelector("#next-3");
const buttonField4 = document.querySelector("#next-4");
const buttonField5 = document.querySelector("#next-5");
const buttonField6 = document.querySelector("#next-6");

// TODO check empty
// Personal details
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const address = document.querySelector("#address");
const phoneNumber = document.querySelector("#phone_number");
const email = document.querySelector("#email");
// Career Objective
const summary = document.querySelector("#summary");
// Education
const schoolName = document.querySelector("#school_name");
const degree = document.querySelector("#degree");
const descriptionSchool = document.querySelector("#description_school");
const startDate = document.querySelectorAll("#start_end_date_school")[0];
const endDate = document.querySelectorAll("#start_end_date_school")[1];
// Skill
const descriptionSkill = document.querySelector("#description_skill");

buttonField1.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator1();
});

buttonField2.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator2();
});

buttonField3.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator3();
});

buttonField4.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator4();
});

const blank = "Cannot be blank";
const invalid = "Invalid email";

const checkValidator1 = function () {
    const firstNameValue = trimValue(firstName);
    const lastNameValue = trimValue(lastName);
    const addressValue = trimValue(address);
    const phoneNumberValue = trimValue(phoneNumber);
    const emailValue = trimValue(email);
    checkEmpty(firstNameValue, firstName, blank);
    checkEmpty(lastNameValue, lastName, blank);
    checkEmpty(addressValue, address, blank);
    checkEmpty(phoneNumberValue, phoneNumber, blank);
    checkEmail(emailValue, email, blank, invalid);
};

const checkValidator2 = function () {
    const summaryValue = trimValue(summary);
    checkEmpty(summaryValue, summary, blank);
};

const checkValidator3 = function () {
    const schoolNameValue = trimValue(schoolName);
    const degreeValue = trimValue(degree);
    const descriptionSchoolValue = trimValue(descriptionSchool);
    const startDateValue = trimValue(startDate);
    const endDateValue = trimValue(endDate);
    checkEmpty(schoolNameValue, schoolName, blank);
    checkEmpty(degreeValue, degree, blank);
    checkEmpty(descriptionSchoolValue, descriptionSchool, blank);
    checkEmpty(startDateValue, startDate);
    checkEmpty(endDateValue, endDate, blank);
};

const checkValidator4 = function () {
    const descriptionSkillValue = trimValue(descriptionSkill);
    checkEmpty(descriptionSkillValue, descriptionSkill, blank);
};

const checkEmpty = (value, inputValue, message) =>
    value === "" ? setError(inputValue, message) : setSuccess(inputValue);

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

const trimValue = (e) => e.value.trim();
