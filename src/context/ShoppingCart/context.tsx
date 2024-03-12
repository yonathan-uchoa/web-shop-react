import React, { createContext } from "react";
import { Cart, Product } from "./data.ts";

type ContextType = {
  cartState: Cart;
  cartDispatch: React.Dispatch<{ type: string; item: Product }>;
};

export const ShoppingCartContext = createContext<ContextType | null>(null);
