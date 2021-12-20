import { LinkContainer } from "react-router-bootstrap";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import logo from "../components/logo.jpg"
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="A" width="70" height="70"></img>
        </Navbar.Brand>
        <LinkContainer to="/">
          <Button>About</Button>
        </LinkContainer>
        {/* <LinkContainer to="/about">About</LinkContainer> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span></span>
            <LinkContainer to="/calculator">
              <Button>Calculator</Button>
            </LinkContainer>
            <span></span>
            <LinkContainer to="/recents">
              <Button>Recent</Button>
            </LinkContainer>
            {/* <Link to="/">Calculator</Link> */}
            {/* <Link to="/recents">Recents</Link>
              <Link to="/expenses">Expenses</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
