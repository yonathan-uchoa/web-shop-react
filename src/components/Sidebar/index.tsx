import { Container, Form } from "react-bootstrap";
import "./styles.scss";

export const Sidebar = () => {
  return (
    <Container fluid>
      <Form>
        <div key="default-checkbox" className="mb-3">
          <Form.Check type="checkbox" id="1" label="type 1" />
          <Form.Check type="checkbox" id="2" label="type 2" />
          <Form.Check type="checkbox" id="3" label="type 3" />
          <Form.Check type="checkbox" id="4" label="type 4" />
        </div>
      </Form>
    </Container>
  );
};
