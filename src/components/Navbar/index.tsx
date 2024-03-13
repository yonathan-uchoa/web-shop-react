import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import "./styles.scss";
import { useContext } from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import { Product } from "../../context/ShoppingCart/data";
import { openCart } from "../../context/ShoppingCart/actions";

export const Navbar = () => {
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartState, cartDispatch } = cartContext;
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
          <Nav.Link to="/order" as={NavLink}>
            Order
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle cart-button"
          onClick={() => openCart(cartDispatch)}
        >
          <IoMdCart size={24} />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-counter ">
            {cartState
              ? cartState.products.reduce(
                  (accumulator: number, value: Product) =>
                    accumulator + value.quantity,
                  0
                )
              : 0}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
