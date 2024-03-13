import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";
import React from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import "./styles.scss";
import { addItemCart } from "../../context/ShoppingCart/actions";

type Props = {
  item: Product;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const ItemFrame = ({ item, setShow, show }: Props) => {
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartDispatch } = cartContext;
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
        <Button
          onClick={() => {
            addItemCart(cartDispatch, item);
          }}
          className="w-100"
        >
          +Add To Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
