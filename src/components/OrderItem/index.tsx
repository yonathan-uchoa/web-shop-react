import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";
import "./styles.scss";
import { formatCurrency } from "../../utilities/format-currency";

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  item: Product;
};

export const OrderItem = ({ item, setShow }: Props) => {
  return (
    <Container>
      <Row
        onClick={() => setShow(true)}
        className="d-flex align-items-center item-frame"
      >
        <Col className="d-flex justify-content-center">
          <img
            src={item.image}
            style={{ maxHeight: "100px", objectFit: "contain" }}
            className="d-flex justify-content-center"
          />
        </Col>
        <Col xs={8} md={8} sm={5} className="item-frame-title">
          <span>
            <b>{item.quantity}x</b> {item.title}
          </span>
        </Col>
        <Col>
          <span className="text-end">
            <b>Total: {formatCurrency(item.quantity * item.price)}</b>
          </span>
        </Col>
      </Row>
    </Container>
  );
};
