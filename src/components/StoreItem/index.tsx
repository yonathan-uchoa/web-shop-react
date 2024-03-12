import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCart/context";
import { increaseCartQuantity } from "../../context/ShoppingCart/actions.ts";

import "./styles.scss";

export type StoreItemsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const StoreItem = (item: StoreItemsProps) => {
  const cartContext = useContext(ShoppingCartContext);
  const { cartState, cartDispatch }: any = cartContext;

  return (
    <Card className="item-card">
      <Card.Img
        variant="top"
        src={item.image}
        height="150px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4 item-title">
          <span className="fs-5 text-truncate">{item.title}</span>
          <span className="ms-2 text-muted">${item.price}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button
            onClick={() => {
              increaseCartQuantity(cartDispatch, item);
            }}
            className="w-100"
          >
            +Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
