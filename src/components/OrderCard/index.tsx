import { Card, ListGroup } from "react-bootstrap";
import { Order } from "../../context/ShoppingCart/data";
import { formatCurrency } from "../../utilities/format-currency";
import { OrderItem } from "../OrderItem";

export const OrderCard = (order: Order) => {
  return (
    <Card className="d-flex mb-3 m-t3">
      <Card.Header>Order {order.id}</Card.Header>
      <ListGroup>
        {order.cart.products.map((item) => {
          return (
            <ListGroup.Item>
              <OrderItem key={item.id} {...item} />
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
