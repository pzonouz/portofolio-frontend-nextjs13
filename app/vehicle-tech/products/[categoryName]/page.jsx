import { products } from "@/app/Constants/products";
import Card from "@/app/components/Card";

const ProductsByCategories = ({ params }) => {
  let { categoryName } = params;
  categoryName = decodeURI(categoryName);
  const getProductCategoriesByProducts = () => {
    let productCategoriesByProducts = {};
    Object.entries(products).map(([, value]) => {
      Object.entries(value).map(([, value]) => {
        Object.entries(value).map(([, value]) => {
          Object.entries(value).map(([key, value]) => {
            productCategoriesByProducts[key] = value;
          });
        });
      });
    });
    return productCategoriesByProducts;
  };

  const fetchedProducts = getProductCategoriesByProducts()[categoryName];
  return (
    <div className=" mt-6">
      <div className=" bg-red-600 h-28 text-3xl text-white text-center align-middle leading-[7rem]">
        {categoryName}
      </div>
      <div className=" mt-6 grid grid-cols-2 md:grid-cols-4 mx-4 gap-6 md:px-12">
        {fetchedProducts.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              image={item.image}
              link={`/vehicle-tech/product/${item.name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsByCategories;
