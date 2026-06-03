const count = document.querySelector("#count");
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnReset = document.querySelector('#btn-reset')

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

btnReset.addEventListener('click', function () {
    counter = 0;
    count.textContent = counter;
} )