import { ReactNode, useReducer } from "react";
import { ShoppingCartContext } from "./context";
import { reducer } from "./reducer";
import { emptyCart } from "./data";

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(reducer, emptyCart);

  return (
    <ShoppingCartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
