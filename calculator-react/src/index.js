import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: "",
      userInput: "",
    };
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
  componentDidMount() {
    document.addEventListener("keydown", this.keyDown);
    const buttons = document.querySelectorAll("button");
    this.handleButtons(buttons);
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
          <table>
            <tr>
              <td>
                <button class="number">1</button>
              </td>
              <td>
                <button class="number">2</button>
              </td>
              <td>
                <button class="number">3</button>
              </td>
              <td>
                <button class="operator">+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="number">4</button>
              </td>
              <td>
                <button class="number">5</button>
              </td>
              <td>
                <button class="number">6</button>
              </td>
              <td>
                <button class="operator">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="number">7</button>
              </td>
              <td>
                <button class="number">8</button>
              </td>
              <td>
                <button class="number">9</button>
              </td>
              <td>
                <button class="operator">*</button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="C">C</button>
              </td>
              <td>
                <button class="number">0</button>
              </td>
              <td>
                <button class="number">=</button>
              </td>
              <td>
                <button class="operator">/</button>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
