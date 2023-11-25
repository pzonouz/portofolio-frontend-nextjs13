import ProductBanner from "./ProductBanner";

const ProductBanners = ({ banners }) => {
  return (
    <div className="mx-[1rem] flex flex-col gap-4 aspect-[2.05/1] mt-4 md:mt-0 md:row-start-1">
      {banners?.map((item) => {
        return <ProductBanner key={item.id} item={item} />;
      })}
    </div>
  );
};
export default ProductBanners;
