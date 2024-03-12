import { Col, Container, Row } from "react-bootstrap";
import { StoreItem, StoreItemsProps } from "../../components/StoreItem";
import { Sidebar } from "../../components/Sidebar";

const data: StoreItemsProps[] = await fetch("http://localhost:4000/products")
  .then((data) => {
    return data.json();
  })
  .catch(() => []);

console.log(data);
export const Store = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3} className="border border-primary text-break">
            <Sidebar />
          </Col>
          <Col sm={9}>
            <Row md={2} xs={1} lg={3} className="g-3">
              {data.map((item) => {
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
    </>
  );
};

export default Store;
