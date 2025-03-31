const rangeEl = document.getElementById("font-size-control");
// console.dir(rangeEl);
const spanEl = document.getElementById("text");
// console.dir(spanEl);

rangeEl.addEventListener("input", onRange);

function onRange(event) {
  const fontVal = Number(event.currentTarget.value);
  spanEl.style.fontSize = `${fontVal}px`;
  //   console.log(fontVal);
}
