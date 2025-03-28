let counterValue = 0; 

const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
const counter = document.getElementById("value");
console.log(counter);

function handleClick(event) {
    const clickBt = event.currentTarget;
  console.log(clickBt);
};


btnDecrement.addEventListener('click', handleClick);
btnIncrement.addEventListener('click', handleClick);