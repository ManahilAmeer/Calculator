import "./App.css";
import Keyboard from "./Keyboard";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import {
  display,
  compute,
  clearScreen,
} from "./reducer";
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
const App=(props)=> {
  useEffect(()=>{
    fetch();
  },[])
  const fetch=()=>{
    const buttons = document.querySelectorAll("button");
    handleButtons(buttons);
    document.title = "Calculator App";
  }
  const handleButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (ev) => {
      if (buttons[i].textContent === "=") {
        console.log("c")
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
  return (
    <>
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
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
