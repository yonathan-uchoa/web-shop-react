import { Button, Offcanvas, Stack } from "react-bootstrap";
import "./styles.scss";
import { useContext } from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import { closeCart, processCheckout } from "../../context/ShoppingCart/actions";
import { CartItem } from "../CartItem";
import { formatCurrency } from "../../utilities/format-currency";

export const ShoppingCart = () => {
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartState, cartDispatch } = cartContext;
  const totalCart = cartState.products.reduce(
    (accumulator, value) => accumulator + value.price * value.quantity,
    0
  );

  return (
    <Offcanvas
      show={cartState.isOpen}
      onHide={() => closeCart(cartDispatch)}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Cart </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={4}>
          {cartState.products?.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(totalCart)}
          </div>
          <Button
            className="mt-4"
            onClick={() => {
              alert("checkout success!");
              processCheckout(cartDispatch).then(() =>
                window.location.reload()
              );
            }}
          >
            Proceed to checkout
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
