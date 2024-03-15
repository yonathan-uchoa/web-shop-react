import { Button } from "react-bootstrap";
import {
  addItemCart,
  removeItemCart,
} from "../../context/ShoppingCart/actions";
import { useContext, useState } from "react";
import {
  CartContextType,
  ShoppingCartContext,
} from "../../context/ShoppingCart/context";
import { Product } from "../../context/ShoppingCart/data";

type Props = {
  item: Product;
};

export const CartButton = ({ item }: Props) => {
  const cartContext = useContext(ShoppingCartContext) as CartContextType;
  const { cartState, cartDispatch } = cartContext;
  const itemOnCart = cartState.products.find((el) => el.id === item.id);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading ? (
        <Button variant="warning" disabled className="w-100">
          {" "}
          Processing...
        </Button>
      ) : itemOnCart ? (
        <Button
          variant="danger"
          onClick={() => {
            setLoading(true);
            removeItemCart(cartDispatch, item).then(() => setLoading(false));
          }}
          className="w-100"
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLoading(true);
            addItemCart(cartDispatch, item).then(() => setLoading(false));
          }}
          className="w-100"
        >
          +Add To Cart
        </Button>
      )}
    </>
  );
};
