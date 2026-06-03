const count = document.querySelector("#count");
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");

let counter = 0;

btnPlus.addEventListener("click", function () {
  counter++;
  count.textContent = counter;
});

btnMinus.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        count.textContent = counter;
    }
});