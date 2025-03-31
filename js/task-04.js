const btnDecrement = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
// console.log(btnIncrement);
const counter = document.getElementById("value");
// console.log(counter);
let counterValue = 0;

function handleClick(event) {
  const clickBt = event.currentTarget;
  // console.dir(clickBt);
  // const anyBtn = event.target;
  // console.log(anyBtn);
  // if (event  = )
  // console.log(clickBt.dataset.action);
  if (clickBt.dataset.action === "decrement") {
    counterValue -= 1;
    // console.log(counterValue);
    counter.textContent = counterValue;
  } else {
    counterValue += 1;
    // console.log(counterValue);
    counter.textContent = counterValue;
  }
}

btnDecrement.addEventListener("click", handleClick);
btnIncrement.addEventListener("click", handleClick);
