import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
