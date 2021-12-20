import {
  Nav,
  Navbar,
  Container,
  ListGroup,
  Card,Button
} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";
import "../style/About.css";
const About = () => {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Card>
        <Card.Body>
          <Card.Title>About App</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Online Calculator
          </Card.Subtitle>
          <Card.Text>
            This app provides a facility to do calculation even without having a
            calculator. It is a simple yet easy to use calculator. You can also
            view your recent calculations by navigating to Recent page.
          </Card.Text>
          <h3>Technical Info</h3>
          <p>
            This app is developed in ReactJS​, I have used Redux for state
            management. In redux I am using reducers that take previuos state as
            a parameter and returns, after performing some computations, the new
            updated state.
          </p>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Features</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Simple Calculation</ListGroup.Item>
            <ListGroup.Item>Support input from keyboard</ListGroup.Item>
            <ListGroup.Item>Store your recent calculations</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <footer>© 2021 Manahil Ameer - All Rights Reserved</footer>
    </>
  );
};

export default About;
