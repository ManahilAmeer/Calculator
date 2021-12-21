import Keyboard from "./Keyboard";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { display, compute, clearScreen } from "../Reducer/reducer";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";
import MyNavbar from "./Navbar";
const mapStateToProps = (state) => {
  return {
    answer: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    display: (obj) => dispatch(display(obj)),
    compute: (id) => dispatch(compute(id)),
    clearScreen: (obj) => dispatch(clearScreen(obj)),
  };
};
const App = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", _keyDown);
    fetch();
    return () => {
      // unsubscribe event
      document.removeEventListener("keydown", _keyDown);
    };
  }, );
  const fetch = () => {
    const buttons = document.querySelectorAll("button");
    handleButtons(buttons);
    document.title = "Calculator App";
  };
  const handleButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (ev) => {
        if (buttons[i].textContent === "=") {
          // console.log("c")
          props.compute();
        }
        if (buttons[i].textContent === "C") {
          props.clearScreen();
        } else if (
          buttons[i].textContent !== "=" &&
          buttons[i].textContent !== "C"
        ) {
          props.display(buttons[i].textContent);
        }
      });
    }
  };
  const _keyDown = (ev) => {
    ev.preventDefault();
    if (ev.key >= "0" && ev.key <= "9") {
      props.display(ev.key);
    }
    if (
      ev.key === "+" ||
      ev.key === "/" ||
      ev.key === "-" ||
      ev.key === "*" ||
      ev.key === "."
    ) {
      props.display(ev.key);
    }
    if (ev.key === "Enter") {
      props.compute();
    }
    if (ev.key === "Backspace") {
      props.clearScreen();
    }
  };
  return (
    <>
      <MyNavbar></MyNavbar>
      <div className="cal-grid">
        <input
          type="text"
          name="output-screen"
          id="output-screen"
          value={props.answer}
          disabled
        />
        <Keyboard></Keyboard>
      </div>
      <Outlet />
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
