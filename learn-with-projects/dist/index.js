"use strict";
const userForm = document.querySelector(".user-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const userData = {
        name,
        email,
    };
    console.log(userData);
});
