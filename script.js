let count = 0;
const button = document.getElementById("myButton");
const output = document.getElementById("output");

button.addEventListener("click", function() {
  count++;
  button.textContent = "Нажато " + count + " раз(а)";
  output.textContent = "Нажатий: " + count;
});