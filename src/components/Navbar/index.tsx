import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import "./styles.scss";

export const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle cart-button"
        >
          <IoMdCart size={24} />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-counter ">
            9
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
