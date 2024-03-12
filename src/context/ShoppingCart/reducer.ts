import * as types from "./types.ts";
import { Cart, Product } from "./data.ts";

export const reducer = (
  state: Cart,
  action: { type: string; item: Product }
) => {
  switch (action.type) {
    case types.INCREASE_CART_QUANTITY: {
      if (state.products.find((el) => el.id === action.item.id) == null) {
        state.products.push({ ...action.item, quantity: 1 });

        return { ...state };
      } else {
        const index = state.products.findIndex(
          (el) => el.id === action.item.id
        );
        state.products[index].quantity += 1;
        console.log("falso");
        return { ...state };
      }
    }
    // case types.DECREASE_CART_QUANTITY: {
    //   if (state.products.find((el) => el.id === action.item.id) == null) {
    //     state.products.push({ ...action.item, quantity: 1 });
    //     return { ...state };
    //   } else {
    //     state.products[
    //       state.products.findIndex((el) => el.id === action.item.id)
    //     ].quantity -= 1;
    //     return { ...state };
    //   }
    // }
  }
  return { ...state };
};
