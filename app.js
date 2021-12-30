const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const btnConfirm = document.querySelector("#btn");

//username validation
function usernameCheck() {
  const userError = document.querySelector("#username-error");
  if (username.value.length < 3) {
    username.style.borderColor = "#e74c3c";
    userError.style.visibility = "visible";
    userError.innerText = "Username must be at least 3 characters";
  } else if (username.value.length > 20) {
    username.style.borderColor = "#e74c3c";
    userError.style.visibility = "visible";
    userError.innerText = "Username must be at most 20 characters";
  } else {
    username.style.borderColor = "#2ecc71";
    userError.style.visibility = "hidden";
  }
}

//email validation
function emailCheck() {
  const error = document.querySelector("#email-error");
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailformat)) {
    email.style.borderColor = "#2ecc71";
    error.style.visibility = "hidden";
  } else {
    email.style.borderColor = "#e74c3c";

    error.style.visibility = "visible";
    error.innerText = "Please enter a valid email address";
  }
}

//password validation
function passwordCheck() {
  const error = document.querySelector("#password-error");
  if (password.value.length < 6) {
    password.style.borderColor = "#e74c3c";
    error.style.visibility = "visible";
    error.innerText = "password must be at least 6 characters";
  } else if (password.value.length > 20) {
    password.style.borderColor = "#e74c3c";
    error.style.visibility = "visible";
    error.innerText = "password must be at most 20 characters";
  } else {
    password.style.borderColor = "#2ecc71";
    error.style.visibility = "hidden";
  }
}

//password confirmation
function passwordConfirm() {
  const error = document.querySelector("#password2-error");
  if (confirmPassword.value === "") {
    confirmPassword.style.borderColor = "#e74c3c";
    error.style.visibility = "visible";
    error.innerText = "Please confirm password";
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.style.borderColor = "#e74c3c";
    error.style.visibility = "visible";
    error.innerText = "passwords must match";
  } else {
    confirmPassword.style.borderColor = "#2ecc71";
    error.style.visibility = "hidden";
  }
}

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();
  emailCheck();
  usernameCheck();
  passwordCheck();
  passwordConfirm();
});
