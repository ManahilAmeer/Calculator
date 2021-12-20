import Keyboard from "./Keyboard";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { display, compute, clearScreen } from "../Reducer/reducer";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.css";
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
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
    fetch();
  }, []);
  const fetch = () => {
    // document.addEventListener("keydown", _keyDown);
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Link to="/recents">Invoices</Link> <span></span>
              <Link to="/expenses">Expenses</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
