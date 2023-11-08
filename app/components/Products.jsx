import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mx-3 items-stretch">
      {products?.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            link={`/products/by_id/${item.id}/`}
          />
        );
      })}
    </div>
  );
};
export default Products;
