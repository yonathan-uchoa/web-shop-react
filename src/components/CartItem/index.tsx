import { Button, Form, Stack } from "react-bootstrap";
import { Product } from "../../context/ShoppingCart/data";
import "./styles.scss";
import { useContext, useState } from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import {
  itemQuantity,
  removeItemCart,
} from "../../context/ShoppingCart/actions";
type Props = {
  item: Product;
};

export const CartItem = ({ item }: Props) => {
  const row = [];
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartDispatch } = cartContext;
  const [loading, setLoading] = useState<boolean>(false);

  for (let i = 1; i < 10; i++) {
    row.push(
      <option value={i} key={`option-${i}`}>
        {i}
      </option>
    );
  }
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center cart-item"
    >
      <img src={item.image} />
      <div className="cart-item-title">{item.title}</div>
      <Form.Select
        defaultValue={item.quantity}
        size="sm"
        style={{ width: "100px" }}
        onChange={async (event) => {
          item.quantity = +event.target.value;
          await itemQuantity(cartDispatch, item);
        }}
      >
        {row}
      </Form.Select>
      {loading ? (
        <Button variant="warning" disabled size="sm">
          Processing...
        </Button>
      ) : (
        <Button
          variant="danger"
          onClick={() => {
            setLoading(true);
            removeItemCart(cartDispatch, item).then(() => setLoading(false));
          }}
          size="sm"
        >
          remove
        </Button>
      )}
    </Stack>
  );
};
