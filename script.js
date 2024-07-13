let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}

function backspace() {
  display.value = display.value.slice(0,-1)
}