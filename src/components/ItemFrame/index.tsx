import { Modal } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";
import React from "react";
import "./styles.scss";
import { CartButton } from "../CartButton";
import { formatCurrency } from "../../utilities/format-currency";

type Props = {
  item: Product;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  showButton?: boolean;
};

export const ItemFrame = ({
  item,
  setShow,
  show,
  showButton = true,
}: Props) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-light">
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="item-frame-body">
        <img src={item.image} className="img-fluid" />
        <p className="text-justify m-3">{item.description}</p>
      </Modal.Body>
      <Modal.Footer className="gap-3">
        <p className="text-start w-100 text-muted h4">
          {formatCurrency(item.price)}
        </p>
        {showButton && <CartButton item={item} />}
      </Modal.Footer>
    </Modal>
  );
};
