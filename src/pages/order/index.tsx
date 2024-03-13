import { useFetch } from "../../hooks/useFetch";

const Order = () => {
  const [result, loading] = useFetch("http://localhost:4000/order", {});
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {result?.data.map((el) => (
        <p>
          {el.id} {el.total}
        </p>
      ))}
    </div>
  );
};

export default Order;
