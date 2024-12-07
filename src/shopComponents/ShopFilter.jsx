import { IoCloseSharp } from "react-icons/io5";

import { Accordion } from "../components/Accordion";
import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

export const ShopFilter = () => {
  const { isShopFilterOpen, toggleShopFilter } = useContext(MainContext);

  return (
    <div
      className={`fixed ${isShopFilterOpen ? "left-0" : "-left-[90%] md:-left-[400px]"} top-0 z-30 h-full w-[90%] max-w-[400px] bg-secondary-bg-color transition-all duration-300 md:w-full`}
    >
      <ShopFilterTop toggleShopFilter={toggleShopFilter} />
      <ShopFilterAvailability />
      <ShopFilterColor />
    </div>
  );
};

const ShopFilterTop = ({ toggleShopFilter }) => {
  return (
    <div className="relative flex flex-col gap-0 border-b border-primary-border-color px-5 py-4">
      <h4 className="offcanvas-heading">Filter And Sort</h4>
      <span className="text-xs uppercase tracking-wide text-primary-text-color">
        462 Products
      </span>
      <button
        onClick={toggleShopFilter}
        className="absolute right-3 top-3 text-2xl text-primary-text-color"
      >
        <IoCloseSharp />
      </button>
    </div>
  );
};

const ShopFilterAvailability = () => {
  const [inStock, setInStock] = useState(true);
  return (
    <Accordion header={"Filter"} headerStyle={"order-1"}>
      <div className="flex items-center gap-2 py-4">
        <button
          onClick={() => setInStock(!inStock)}
          className={`relative flex h-[22px] w-12 items-center rounded-full transition-all duration-500 ${inStock ? "bg-darken-bg-color" : "bg-primary-bg-color"}`}
        >
          <span
            className={`${inStock ? "left-[4px]" : "left-[32px]"} absolute size-3 rounded-full bg-white transition-all duration-500`}
          ></span>
        </button>
        <p className="text-sm tracking-wide text-primary-text-color">Instock</p>
      </div>
    </Accordion>
  );
};

const ShopFilterColor = ({ label = "black" }) => {
  return (
    <Accordion header={"Color"} headerStyle={"order-1"}>
      <ul>
        <li>
          <label className="text-text-color-primary relative flex items-center text-sm">
            <input
              type="checkbox"
              name="shirt"
              className="before:border-border-color checked:before:bg-color-pink ml-3 mr-2 cursor-pointer appearance-none before:absolute before:left-0 before:top-2/4 before:h-[14px] before:w-[14px] before:-translate-y-2/4 before:rounded-[2px] before:border"
            />
            <span
              className={`mr-2 h-[14px] w-[14px] rounded-full`}
              style={{ backgroundColor: label }}
            ></span>
            {label}
          </label>
        </li>
      </ul>
    </Accordion>
  );
};
