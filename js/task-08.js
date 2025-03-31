const formEl = document.querySelector(".login-form");
// console.dir(formEl);

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("No data. Enter email and password");
  }

  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
}
