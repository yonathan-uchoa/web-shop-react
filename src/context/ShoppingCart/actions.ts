import { Cart, Product } from "./data.ts";
import * as types from "./types.ts";

export const itemQuantity = (dispatch: any) => {
  dispatch({});
};
export const increaseCartQuantity = async (dispatch: any, item: Product) => {
  const {
    data: { products },
  } = await fetch("http://localhost:4000/cart").then((data) => data.json());
  console.log(products);
  if (products.find((el) => el.id === item.id) == null) {
    await fetch(`http://localhost:4000/cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ products: [{ ...item, quantity: 1 }] }),
    });
    dispatch({
      type: types.INCREASE_CART_QUANTITY,
      item: item,
    });
  } else {
    const index = products.findIndex((el) => el.id === item.id);
    products[index].quantity += 1;
    await fetch(`http://localhost:4000/cart/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: products[index].quantity }),
    });

    dispatch({
      type: types.INCREASE_CART_QUANTITY,
      item: item,
    });
  }
};
export const decreaseCartQuantity = (dispatch: any) => {
  dispatch({});
};
