const inputBox = document.querySelector(".inputbox");
const btn = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const Delete = document.querySelector(".delete");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    inputBox.value += btn[i].textContent;
  });
}

equal.addEventListener("click", function () {
  inputBox.value = eval(inputBox.value);
});
clear.addEventListener("click", function () {
  inputBox.value = "";
});

Delete.addEventListener("click", function () {
  const value = inputBox.value;
  const newValue = value.slice(0, value.length - 1);
  inputBox.value = newValue;
});
