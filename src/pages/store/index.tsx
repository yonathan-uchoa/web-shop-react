import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../../components/StoreItem";
import { Sidebar } from "../../components/Sidebar";
import { useFetch } from "../../hooks/useFetch";
import "./styles.css";
import { Product } from "../../context/ShoppingCart/data";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";

export const Store = () => {
  const [products, productsLoading] = useFetch(
    "https://webshop-backend.adaptable.app/products",
    {}
  );
  const [categories, categoriesLoading] = useFetch(
    "https://webshop-backend.adaptable.app/products/categories",
    {}
  );
  const [categoryFilter, setCategoryFilter] = useState<Set<string>>(
    new Set<string>()
  );
  let filterProd: Product[] = [];

  if (productsLoading || categoriesLoading) {
    return <p>Loading...</p>;
  } else {
    categoryFilter.size === 0
      ? (filterProd = products)
      : (filterProd = products.filter((p: Product) =>
          categoryFilter.has(p.category)
        ));
  }

  return (
    <>
      {products && categories ? (
        <Container fluid>
          <Row>
            <Col sm={3} className="text-break side-bar bg-white">
              <Sidebar
                categories={categories}
                setCategory={setCategoryFilter}
              />
            </Col>
            <Col sm={9}>
              <Row className="g-3 w-100">
                <SearchBar />
              </Row>
              <Row md={2} xs={1} lg={3} className="g-3">
                {filterProd.map((item: Product) => {
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
