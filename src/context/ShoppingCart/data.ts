export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
};

export type Cart = {
  id: string;
  products: Product[];
  isOpen: boolean;
};

export type CartResponse = {
  message: string;
  data: Cart;
};

export type Order = {
  id: number;
  cart: Cart;
  total: number;
  createAt: Date;
};

export type OrderResponse = {
  message: string;
  data: Order[];
};

export const emptyCart: Cart = {
  id: "mycart",
  products: [],
  isOpen: false,
};

export const data: Cart = await fetch(
  "https://webshop-backend.adaptable.app/cart"
)
  .then((res) => res.json())
  .then((res) => {
    res.data.isOpen = false;
    return res.data;
  })
  .catch(() => emptyCart);
