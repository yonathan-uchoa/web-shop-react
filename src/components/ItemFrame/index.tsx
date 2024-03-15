import { Modal } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";
import React from "react";
import "./styles.scss";
import { CartButton } from "../CartButton";

type Props = {
  item: Product;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const ItemFrame = ({ item, setShow, show }: Props) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="item-frame-body">
        <img src={item.image} className="img-fluid" />
        <p className="text-justify m-3">{item.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <CartButton item={item} />
      </Modal.Footer>
    </Modal>
  );
};
