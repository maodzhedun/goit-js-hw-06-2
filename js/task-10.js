function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsForm = document.getElementById("controls");
// console.dir(controlsForm);
const divCubes = document.getElementById("boxes");
// console.log(divCubes);
const createBtn = document.querySelector("[data-create]");
// console.log(createBtn);
const destroyBtn = document.querySelector("[data-destroy]");
// console.log(destroyBtn);
const inputVal = document.querySelector("input");
// console.log(inputVal);

createBtn.addEventListener("click", onCreateClick);

function onCreateClick() {
  divCubes.innerHTML = "";
  const amount = Number(inputVal.value);
  console.log(amount);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Введіть число від 1 до 100");
  }
}

destroyBtn.addEventListener("click", onDestroyClick);

function onDestroyClick() {
  divCubes.innerHTML = "";
  inputVal.value = "";
}

function createBoxes(amount) {
  let boxSize = 30; // Розмір кожного наступного блока

  for (let i = 1; i <= amount; i += 1) {
    {
      const box = document.createElement("div");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add("box");
      divCubes.appendChild(box);
    }
    boxSize += 10;
  }
}
