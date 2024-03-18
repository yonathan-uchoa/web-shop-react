import * as types from "./types.ts";
import { Cart, Product } from "./data.ts";

export const reducer = (
  state: Cart,
  action: { type: string; item?: Product; isOpen?: boolean }
) => {
  switch (action.type) {
    case types.ADD_ITEM_CART: {
      const item = action.item as Product;
      state.products.push({ ...item, quantity: 1 });
      return { ...state };
    }
    case types.REMOVE_ITEM_CART: {
      state.products = state.products.filter((el) => el.id != action.item?.id);
      return { ...state };
    }
    case types.ITEM_QUANTITY: {
      const index = state.products.findIndex((el) => el.id === action.item?.id);
      if (action.item) state.products[index].quantity = action.item.quantity;
      return { ...state };
    }
    case types.CLOSE_CART: {
      return { ...state, isOpen: false };
    }
    case types.OPEN_CART: {
      return { ...state, isOpen: true };
    }
    case types.PROCESS_CHECKOUT: {
      return { ...state };
    }
  }
  return { ...state };
};
