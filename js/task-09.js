function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector(".color");
// console.dir(spanEl);
const btnEl = document.querySelector(".change-color");
// console.log(btnEl);

btnEl.addEventListener("click", onClick);

function onClick() {
  // console.log(event.currentTarget);
  const bodyColor = getRandomHexColor();
  // console.log(bodyColor);
  document.body.style.backgroundColor = bodyColor;
  spanEl.textContent = bodyColor;
}
