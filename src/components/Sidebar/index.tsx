import { Form, Stack } from "react-bootstrap";
import "./styles.scss";

type Props = {
  setCategory: React.Dispatch<React.SetStateAction<Set<string>>>;
  categories: string[];
};

export const Sidebar = ({ categories, setCategory }: Props) => {
  const addFilter = (isChecked: boolean, filter: string) => {
    if (isChecked) {
      setCategory((prev) => new Set(prev).add(filter));
    } else {
      setCategory((prev) => {
        const res = new Set(prev);
        res.delete(filter);
        return res;
      });
    }
  };

  return (
    <Stack direction="vertical" gap={2} className="d-flex pt-3">
      {categories.map((category, index) => (
        <Form.Check
          type="checkbox"
          label={category}
          key={`form-${index}`}
          onChange={(e) => addFilter(e.target.checked, category)}
          className="sidebar-form"
        />
      ))}
    </Stack>
  );
};
