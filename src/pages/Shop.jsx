import { useContext, useEffect, useState } from "react";
import { Breadcrumb } from "../common/Breadcrumb";
import { MainSection } from "../common/MainSection";
import { ProductCard } from "../shopComponents/ProductCard";
import axios from "axios";
import { ShopFilter } from "../shopComponents/ShopFilter";
import { MdTune } from "react-icons/md";
import { MainContext } from "../context/MainContext";

export const Shop = () => {
  const { toggleShopFilter } = useContext(MainContext);
  const [products, setProducts] = useState([]);

  const consumerKey = import.meta.env.VITE_REACT_APP_CONSUMER_KEY;
  const consumerSecret = import.meta.env.VITE_REACT_APP_CONSUMER_SECRET;

  const getProductData = async () => {
    try {
      const res = await axios.get(
        "https://store.techmeter.in/wp-json/wc/v3/products",
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
        <div className="main-div flex w-full items-center justify-between py-2">
          <button
            onClick={toggleShopFilter}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-primary-text-color"
          >
            <MdTune className="text-base" /> Filter and Sort
          </button>
          <p className="text-sm uppercase tracking-wide text-primary-text-color">
            234 Products
          </p>
        </div>
        <div className="main-div mt-1 grid grid-cols-2 gap-2 md:mt-2 md:grid-cols-3 md:gap-3 lg:mt-5 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </MainSection>
      <ShopFilter />
    </>
  );
};
