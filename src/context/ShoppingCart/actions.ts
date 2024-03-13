import { CartDispatch } from "./context.tsx";
import { Product } from "./data.ts";
import * as types from "./types.ts";

export const addItemCart = async (dispatch: CartDispatch, item: Product) => {
  await fetch(`http://localhost:4000/cart`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ products: [{ ...item, quantity: 1 }] }),
  });
  dispatch({
    type: types.ADD_ITEM_CART,
    item: item,
  });
};

export const itemQuantity = async (dispatch: CartDispatch, item: Product) => {
  await fetch(`http://localhost:4000/cart/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ quantity: item.quantity }),
  });

  dispatch({
    type: types.ITEM_QUANTITY,
    item: item,
  });
};

export const removeItemCart = async (dispatch: CartDispatch, item: Product) => {
  await fetch(`http://localhost:4000/cart/${item.id}`, {
    method: "DELETE",
  });
  dispatch({
    type: types.REMOVE_ITEM_CART,
    item: item,
  });
};

export const closeCart = (dispatch: CartDispatch) => {
  dispatch({
    type: types.CLOSE_CART,
  });
};

export const openCart = (dispatch: CartDispatch) => {
  dispatch({
    type: types.OPEN_CART,
  });
};

export const processCheckout = async (dispatch: CartDispatch) => {
  await fetch(`http://localhost:4000/order`, {
    method: "POST",
  });
  dispatch({ type: types.PROCESS_CHECKOUT });
};
