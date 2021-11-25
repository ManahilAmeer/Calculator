function clearScreen() {
  document.getElementById("output-screen").value = "";
}

function display(value) {
  document.getElementById("output-screen").value += value;
}

function compute() {
  const input = document.getElementById("output-screen").value;
  let output;
  if(input==""){
      output="Enter something";
      setTimeout(function () {
        clearScreen();
      }, 500);
  }
  else{
  try {
    output = eval(input);
    setTimeout(function () {
      clearScreen();
    }, 500);
  } catch (e) {
    output = "Invalid Expression!";
    setTimeout(function(){
        clearScreen();
    },500);
  }}
  document.getElementById("output-screen").value = output;
}

document.onkeydown = function (ev) {
  if (ev.key == "Enter") {
    ev.preventDefault();
    compute();
  }
};
