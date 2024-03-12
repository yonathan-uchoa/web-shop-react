import { ReactNode, useReducer } from "react";
import { ShoppingCartContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(reducer, data);

  return (
    <ShoppingCartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
