import { Button, Card } from "react-bootstrap";

export type StoreItemsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const StoreItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: StoreItemsProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        height="150px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5 text-truncate">{title}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100">+Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
