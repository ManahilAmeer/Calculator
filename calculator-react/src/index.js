import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Keyboard from "./Keyboard";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./store"
import { Provider } from "react-redux";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: "",
      userInput: "",
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyDown);
    const buttons = document.querySelectorAll("button");
    this.handleButtons(buttons);
    document.title = "Calculator App";
  }
  keyDown = (ev) => {
    ev.preventDefault();
    if (ev.key >= "0" && ev.key <= "9") {
      this.display(ev.key);
    }
    if (
      ev.key === "+" ||
      ev.key === "/" ||
      ev.key === "-" ||
      ev.key === "*" ||
      ev.key === "."
    ) {
      this.display(ev.key);
    }
    if (ev.key === "Enter") {
      this.compute();
    }
    if (ev.key === "Backspace") {
      this.clearScreen();
    }
  };
  display(value) {
    let ans = this.state.ans;
    ans = ans + value;

    this.setState({
      ans: ans,
    });
  }

  clearScreen = () => {
    this.setState({
      ans: "",
    });
  };
  compute() {
    let output;
    if (this.state.ans === "") {
      output = "Enter something";
      setTimeout(this.clearScreen, 700);
    } else {
      try {
        output = eval(this.state.ans);
      } catch (e) {
        output = "Invalid Expression!";
        setTimeout(this.clearScreen, 700);
      }
    }
    this.setState({
      ans: output,
    });
  }
  handleButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (ev) => {
        if (buttons[i].textContent === "=") {
          this.compute();
        }
        if (buttons[i].textContent === "C") {
          this.clearScreen();
        } else if (
          buttons[i].textContent !== "=" &&
          buttons[i].textContent !== "C"
        ) {
          this.display(buttons[i].textContent);
        }
      });
    }
  }

  render() {
    return (
      <>
        <div className="cal-grid">
          <input
            type="text"
            name="output-screen"
            id="output-screen"
            value={this.state.ans}
            disabled
          />
          <Keyboard></Keyboard>
        </div>
      </>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
