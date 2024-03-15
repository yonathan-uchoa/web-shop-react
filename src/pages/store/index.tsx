import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../../components/StoreItem";
import { Sidebar } from "../../components/Sidebar";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";

export const Store = () => {
  const [products, productsLoading] = useFetch(
    "https://webshop-backend.adaptable.app/products",
    {}
  );
  const [categories, categoriesLoading] = useFetch(
    "https://webshop-backend.adaptable.app/products/categories",
    {}
  );

  if (productsLoading || categoriesLoading) return <p>Loading...</p>;
  return (
    <>
      {products && categories ? (
        <Container fluid>
          <Row>
            <Col sm={3} className="text-break side-bar bg-white">
              <Sidebar categories={categories} />
            </Col>
            <Col sm={9}>
              <Row md={2} xs={1} lg={3} className="g-3">
                {products.map((item) => {
                  return (
                    <Col key={item.id}>
                      <StoreItem {...item} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Fetching error...maybe the server doesn't are connected yet!</p>
      )}
    </>
  );
};

export default Store;
