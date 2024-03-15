import { Container } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";
import "./styles.scss";
import { OrderCard } from "../../components/OrderCard";
import { Order as OrderData } from "../../context/ShoppingCart/data";

const Order = () => {
  const [result, loading] = useFetch(
    "https://webshop-backend.adaptable.app/order",
    {}
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Container className="order-container pt-3 pb-3">
      {result ? (
        result.data.map((order: OrderData) => (
          <OrderCard key={order.id} {...order} />
        ))
      ) : (
        <p className="p-3">
          Fetching error...maybe the server doesn't are connected yet!
        </p>
      )}
    </Container>
  );
};

export default Order;
