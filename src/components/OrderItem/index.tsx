import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";

export const OrderItem = (item: Product) => {
  return (
    <Container className="">
      <Row>
        <Col>
          <img
            src={item.image}
            style={{ height: "100px", objectFit: "contain" }}
          />
        </Col>
        <Col xs={9} md={7} sm={5}>
          <span>
            <b>{item.quantity}x</b> {item.title}
          </span>
        </Col>
        <Col>
          <span className="text-end">
            <b>Total: {item.quantity * item.price}</b>
          </span>
        </Col>
      </Row>
    </Container>
  );
};
