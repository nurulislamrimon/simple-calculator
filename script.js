const display = document.querySelector(".display>input");

const btns = document.querySelectorAll("input[type=button]");
const submit = document.querySelector("input[type=submit]");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});
submit.addEventListener("click", () => {
  const expression = display.value;
  const result = eval(expression);
  display.value = result;
});
