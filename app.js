function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

document.getElementById("calculator").onsubmit = function (event) {
  event.preventDefault();
  const display = document.getElementById("display");
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};
document.getElementById("calculator").onreset = function () {
  clearDisplay();
};
