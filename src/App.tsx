import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCart";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Outlet />
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
