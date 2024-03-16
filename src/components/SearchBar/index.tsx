import { Button, Form } from "react-bootstrap";

export const SearchBar = () => {
  return (
    <Form className="d-flex align-items-center p-3 gap-3">
      <Form.Control
        as="textarea"
        style={{ resize: "none" }}
        rows={1}
        placeholder="search by title..."
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};
