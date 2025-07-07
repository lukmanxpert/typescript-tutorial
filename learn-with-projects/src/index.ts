const userForm = document.querySelector(".user-form") as HTMLFormElement;

const nameInput = document.querySelector("#name") as HTMLInputElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;

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
