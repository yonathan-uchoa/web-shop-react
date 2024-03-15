import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { ShoppingCart } from "./components/ShoppingCart";
import "./styles.scss";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4 bg-white main-container">
          <Outlet />
        </Container>
        <ShoppingCart />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
