const inputEl = document.getElementById("validation-input");

const limitSymbol = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", offInput);

function offInput(event) {
  const userStr = event.currentTarget.value;

  inputEl.classList.remove("valid", "invalid");

  if (userStr.length === limitSymbol) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
