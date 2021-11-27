function clearScreen() {
  document.getElementById("output-screen").value = "";
}

function display(value) {
  document.getElementById("output-screen").value += value;
}

function compute() {
  const input = document.getElementById("output-screen").value;
  let output;
  if (input == "") {
    output = "Enter something";
    setTimeout(function () {
      clearScreen();
    }, 700);
  } else {
    try {
      output = eval(input);
    } catch (e) {
      output = "Invalid Expression!";
      setTimeout(function () {
        clearScreen();
      }, 700);
    }
  }
  document.getElementById("output-screen").value = output;
}
document.onkeydown = function (ev) {
  if (ev.key >= "0" && ev.key <= "9") {
    ev.preventDefault();
    // compute();
    display(ev.key);
  }
  if (ev.key == "+" || ev.key == "/" || ev.key == "-" || ev.key == "*") {
    ev.preventDefault();
    // compute();
    display(ev.key);
  }
  if (ev.key == "Enter") {
    ev.preventDefault();
    compute();
  }
  if (ev.key == "Backspace") {
    clearScreen();
  }
};

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (ev) => {
    if (buttons[i].textContent == "=" ) {
      compute();
    }
    if( buttons[i].textContent == "C"){
      clearScreen();
    }
    else if (buttons[i].textContent != "=" && buttons[i].textContent!="C") {
      display(buttons[i].textContent);
    }
    
  });
}
