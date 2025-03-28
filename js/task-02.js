const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  // console.log(ingredient);
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ul.append(li);
  // console.log(li.textContent);
  // console.log(ul);
});
