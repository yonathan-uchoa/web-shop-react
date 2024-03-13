import React, { createContext } from "react";
import { Cart, Product } from "./data.ts";

export type CartDispatch = React.Dispatch<{
  type: string;
  item?: Product;
  isOpen?: boolean;
}>;

export type CartContextType = {
  cartState: Cart;
  cartDispatch: CartDispatch;
};

export const ShoppingCartContext = createContext<CartContextType | null>(null);
