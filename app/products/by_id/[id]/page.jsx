import Product from "@/app/components/Product";

const page = async ({ params }) => {
  const { id } = params;
  const productRes = await fetch(
    `${process.env.BACKEND_URL}/products/by_id/${id}`
  );
  const product = await productRes.json();
  return <Product product={product} />;
};

export default page;
