import { Form, Stack } from "react-bootstrap";
import "./styles.scss";

export const Sidebar = ({ categories }: { categories: string[] }) => {
  console.warn(categories);
  return (
    <Stack direction="horizontal" gap={2} className="d-flex">
      <Form className="sidebar-form w-100">
        {categories.map((category, index) => (
          <Form.Check type="checkbox" key={index} label={category} />
        ))}
      </Form>
    </Stack>
  );
};
