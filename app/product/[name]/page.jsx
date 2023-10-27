import { products } from "@/app/Constants/products";

const page = ({ params }) => {
  let { name } = params;
  name = decodeURI(name);
  const getProducts = () => {
    let pros = [];
    Object.entries(products).map(([, value]) => {
      Object.entries(value).map(([, value]) => {
        Object.entries(value).map(([, value]) => {
          Object.entries(value).map(([key, value]) => {
            Object.entries(value).map(([key, value]) => {
              pros.push(value);
            });
          });
        });
      });
    });
    return pros;
  };
  const fetchedProducts = getProducts();
  const getProductByName = (name) => {
    const filtered_product = fetchedProducts.filter((item) => {
      if (item.name == name) {
        return true;
      } else {
        return false;
      }
    });
    return filtered_product[0];
  };
  const product = getProductByName(name);
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <div className=" flex w-full flex-col items-center justify-center bg-red-600 h-28 text-xl text-white text-center align-middle ">
        {name}
      </div>
      <img src={product.image} alt={product.name} />
      <div className=" px-4 text-center  ">{product.description}</div>
      <div className=" mt-20 p-2 bg-gray-200 w-full flex flex-col gap-3">
        <i className=" mt-6 fa fa-phone fa-5x text-center"></i>
        <div className=" mt-6"> نیاز به مشاوره دارید؟</div>
        <div className="mt-6 text-gray-600 ">
          جهت استعلام قیمت محصولات، مشاوره خرید و هر سوال دیگر میتوانید با ما
          بطور مستقیم در ارتباط دارید.
        </div>
        <div className=" text-center text-gray-600 text-2xl font-bold tracking-wide">
          09146160216
        </div>
        <div className=" text-center text-gray-600">
          آقای محمدنژاد-مدیر فروش
        </div>
        <div className=" mt-6 text-center text-2xl font-bold tracking-wide text-gray-600">
          09147868011
        </div>
        <div className=" text-center text-gray-600">آقای ساجدی -مدیر فنی</div>
      </div>
    </div>
  );
};

export default page;
