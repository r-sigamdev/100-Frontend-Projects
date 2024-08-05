let button = document.querySelectorAll(".option");
let display = document.querySelector(".input-field");

display.addEventListener("click", () => {
  console.log("display was clicked");
});

addToDisplay = (num) => {
  console.log("number was clicked");
  console.log(num);
  display.value += num;
};
totalButton = (num) => {
  display.value = eval(display.value);
};
clearButton = () => {
  display.value = "";
};
deleteButton = () => {
  display.value = display.value.toString().slice(0, -1);
};
