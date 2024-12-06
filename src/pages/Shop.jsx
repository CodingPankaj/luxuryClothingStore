import { useEffect, useState } from "react";
import { Breadcrumb } from "../common/Breadcrumb";
import { MainSection } from "../common/MainSection";
import { ProductCard } from "../shopComponents/ProductCard";
import axios from "axios";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  const consumerKey = import.meta.env.VITE_REACT_APP_CONSUMER_KEY;
  const consumerSecret = import.meta.env.VITE_REACT_APP_CONSUMER_SECRET;

  console.log(consumerKey);

  const getProductData = async () => {
    try {
      const res = await axios.get(
        "https://dianaluxury.com/wp-json/wc/v3/products",
        {
          auth: {
            username: consumerKey,
            password: consumerSecret,
          },
          params: {
            per_page: 12,
            page: 1,
          },
        },
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <MainSection>
        <Breadcrumb />
        <div className="main-div">
          <h1 className="main-heading">Women</h1>
        </div>
        <div className="main-div mt-1 grid grid-cols-2 gap-2 md:mt-2 md:grid-cols-3 md:gap-3 lg:mt-5 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </MainSection>
    </>
  );
};
