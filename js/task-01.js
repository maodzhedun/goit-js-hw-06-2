const categories = document.querySelector("#categories");
// console.log(categories);
const listItems = categories.children;
console.log("Number of categories:", listItems.length);
// console.log([...listItems]);

[...listItems].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  //   console.log(item);
  console.log("Elements:", item.lastElementChild.children.length);
  //   console.log("Elements:", item.lastElementChild.length);
  //   const elements = document.querySelectorAll("ul > li");
  //   console.log(elements.length);
  //   console.log("Elements:", elements.length);
});
