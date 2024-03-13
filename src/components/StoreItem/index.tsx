import { Button, Card } from "react-bootstrap";
import { useContext, useState } from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import {
  addItemCart,
  removeItemCart,
} from "../../context/ShoppingCart/actions.ts";

import "./styles.scss";
import { ItemFrame } from "../ItemFrame/index.tsx";
import { Product } from "../../context/ShoppingCart/data.ts";

export const StoreItem = (item: Product) => {
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartState, cartDispatch } = cartContext;
  const itemOnCart = cartState.products.find((el) => el.id === item.id);

  const [show, setShow] = useState(false);

  return (
    <>
      <ItemFrame item={item} setShow={setShow} show={show} />
      <Card className="item-card">
        <Card.Img
          variant="top"
          src={item.image}
          height="150px"
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => setShow(true)}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title
            className="d-flex justify-content-between align-items-baseline mb-4 item-title"
            onClick={() => setShow(true)}
          >
            <span className="fs-5 text-truncate">{item.title}</span>
            <span className="ms-2 text-muted">${item.price}</span>
          </Card.Title>
          <div className="mt-auto">
            {itemOnCart ? (
              <Button
                variant="danger"
                onClick={() => removeItemCart(cartDispatch, item)}
                className="w-100"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addItemCart(cartDispatch, item);
                }}
                className="w-100"
              >
                +Add To Cart
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
