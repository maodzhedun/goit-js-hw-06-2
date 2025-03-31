const userInput = document.getElementById("name-input");

const userOutput = document.getElementById("name-output");

userInput.addEventListener("input", inputData);

function inputData(event) {
  if (event.currentTarget.value.trim() === "") {
    userInput.textContent = "Anonymous";
  } else {
    userOutput.textContent = event.currentTarget.value;
  }
}
