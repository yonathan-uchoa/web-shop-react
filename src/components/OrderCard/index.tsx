import { Card, ListGroup } from "react-bootstrap";
import { Order, Product } from "../../context/ShoppingCart/data";
import { formatCurrency } from "../../utilities/format-currency";
import { OrderItem } from "../OrderItem";
import { ItemFrame } from "../ItemFrame";
import { useRef, useState } from "react";
import "./styles.scss";

export const OrderCard = (order: Order) => {
  const [show, setShow] = useState<boolean>(false);
  const currentItem = useRef<Product | null>(null);

  return (
    <Card className="d-flex mb-3 m-t3">
      {currentItem.current && (
        <ItemFrame
          item={currentItem.current}
          setShow={setShow}
          show={show}
          showButton={false}
        />
      )}
      <Card.Header>Order {order.id}</Card.Header>
      <ListGroup>
        {order.cart.products.map((item) => {
          return (
            <ListGroup.Item
              key={item.id}
              className="rounded-0 list-item"
              onClick={() => {
                console.log(item);
                currentItem.current = item;
              }}
            >
              <OrderItem item={item} setShow={setShow} />
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <Card.Footer className="ms-auto fw-bold fs-5 p-3 w-100 text-end">
        Total: {formatCurrency(order.total)}
      </Card.Footer>
    </Card>
  );
};
