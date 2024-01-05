const increase = document.getElementById("button1");
const decrease = document.getElementById("button2");
const reset = document.getElementById("button3");
const counterHeader = document.getElementById("header");

let counter = 0;

increase.onclick = function () {
  counter++;
  counterHeader.textContent = counter;
};

decrease.onclick = function () {
  counter--;
  counterHeader.textContent = counter;
  console.log("decrease");
};

reset.onclick = function () {
  counter = 0;
  counterHeader.textContent = counter;
  console.log("reset");
};
