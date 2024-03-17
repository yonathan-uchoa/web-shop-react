import { Form } from "react-bootstrap";
import "./styles.scss";

type Props = {
  setTitleFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ setTitleFilter }: Props) => {
  return (
    <Form className="pt-3 pb-3">
      <Form.Control
        as="textarea"
        className="sb-text-area"
        rows={1}
        placeholder="search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
    </Form>
  );
};
