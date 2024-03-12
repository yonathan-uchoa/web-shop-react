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
};

const fakeData: Cart = {
  id: "mycart",
  products: [],
};

export const data: Cart = await fetch("http://localhost:4000/cart")
  .then((res) => res.json())
  .then((res) => res.data)
  .catch(() => fakeData);
